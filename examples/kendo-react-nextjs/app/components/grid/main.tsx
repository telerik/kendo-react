'use client';
import * as React from 'react';
import { GridColumn, GridDetailRowProps, GridDataStateChangeEvent, GridExpandChangeEvent } from '@progress/kendo-react-grid';
import { IntlService } from '@progress/kendo-react-intl';
import { DataResult, process, State } from '@progress/kendo-data-query';
import { Button } from "@progress/kendo-react-buttons";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';

const MyGrid: any = dynamic(
  () =>
    import("@progress/kendo-react-grid").then(
      (module) => module.Grid
    ) as any,
  { ssr: false }
);

import orders from './orders.json';
import { Order } from './interfaces';

interface LocaleInterface {
  language: string,
  locale: string
}

const DATE_FORMAT = 'yyyy-mm-dd hh:mm:ss.SSS';
const intl = new IntlService('en');

orders.forEach((o: Order) => {
  o.orderDate = intl.parseDate(
    o.orderDate ? o.orderDate : '20/20/2020',
    DATE_FORMAT
  );

  o.shippedDate = intl.parseDate(
    o.shippedDate ? o.shippedDate.toString() : "20/20/2020",
    DATE_FORMAT
  );
});

const DetailComponent = (props: GridDetailRowProps) => {
  const dataItem = props.dataItem;
  return (
    <div>
      <section style={{ width: "200px", float: "left" }}>
        <p><strong>Street:</strong> {dataItem.shipAddress.street}</p>
        <p><strong>City:</strong> {dataItem.shipAddress.city}</p>
        <p><strong>Country:</strong> {dataItem.shipAddress.country}</p>
        <p><strong>Postal Code:</strong> {dataItem.shipAddress.postalCode}</p>
      </section>
      <MyGrid style={{ width: "500px" }} data={dataItem.details} />
    </div>
  );
}

export const GridNextjs = () => {
  const locales: LocaleInterface[] = [
    {
      language: 'en-US',
      locale: 'en'
    },
    {
      language: 'es-ES',
      locale: 'es'
    }
  ]
  const router = useRouter();
  const [dataState, setDataState] = React.useState<State>({
    skip: 0,
    take: 20,
    sort: [
      { field: 'orderDate', dir: 'desc' }
    ],
    group: [
      { field: 'customerID' }
    ]
  })
  const [currentLocale, setCurrentLocale] = React.useState<LocaleInterface>(locales[0]);
  const [dataResult, setDataResult] = React.useState<DataResult>(process(orders, dataState))

  const dataStateChange = (event: GridDataStateChangeEvent) => {
    setDataResult(process(orders, event.dataState));
    setDataState(event.dataState);
  }

  const expandChange = (event: GridExpandChangeEvent) => {
    const isExpanded =
      event.dataItem.expanded === undefined ?
        event.dataItem.aggregates : event.dataItem.expanded;
    event.dataItem.expanded = !isExpanded;

    setDataResult({ ...dataResult, data: [...dataResult.data] })
  }

  const navigateToIndex = () => {
    router.push('/');
  }

  return (
    <div>
      <div><Button onClick={navigateToIndex}>Index Page</Button></div><br />
      <MyGrid
        style={{ height: '700px' }}
        sortable={true}
        filterable={true}
        groupable={true}
        reorderable={true}
        pageable={{ buttonCount: 4, pageSizes: true }}

        data={dataResult}
        {...dataState}
        onDataStateChange={dataStateChange}

        detail={DetailComponent}
        expandField="expanded"
        onExpandChange={expandChange}
      >
        <GridColumn field="customerID" width="200px" />
        <GridColumn field="orderDate" filter="date" format="{0:D}" width="300px" />
        <GridColumn field="shipName" width="280px" />
        <GridColumn field="freight" filter="numeric" width="200px" />
        <GridColumn field="shippedDate" filter="date" format="{0:D}" width="300px" />
        <GridColumn field="employeeID" filter="numeric" width="200px" />
        <GridColumn locked={true} field="orderID" filterable={false} title="ID" width="90px" />
      </MyGrid>
    </div>
  );
}