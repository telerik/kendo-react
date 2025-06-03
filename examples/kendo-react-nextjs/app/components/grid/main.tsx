'use client';
import * as React from 'react';
import { GridColumn, GridDetailRowProps, GridReorderDropPosition, GridRowReorderEvent } from '@progress/kendo-react-grid';
import { IntlService } from '@progress/kendo-react-intl';
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
    o.orderDate ? o.orderDate.toString() : '20/20/2020',
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
  const [data, setData] = React.useState<Array<any>>(orders);
  
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

  const navigateToIndex = () => {
    router.push('/');
  }

    const calculateIndexToAdd = (dragIndex: number, dropIndex: number, dropPosition: GridReorderDropPosition) => {
        const isDropPosition = dropPosition === 'after';

        if (dragIndex > dropIndex) {
            return isDropPosition ? dropIndex + 1 : dropIndex;
        }

        return isDropPosition ? dropIndex : dropIndex - 1;
    };

  const handleRowReorder = (event: GridRowReorderEvent) => {
    const reorderedData = [...data];
    const droppedItemIndex = data.findIndex((item) => item === event.droppedDataItem);

    event.draggedDataItems.forEach((draggedItem: any) => {
        const draggedItemIndex = data.findIndex((item) => item === draggedItem);
        const idxToAdd: number = calculateIndexToAdd(draggedItemIndex, droppedItemIndex, event.dropPosition)!;

        reorderedData.splice(draggedItemIndex, 1);
        reorderedData.splice(idxToAdd, 0, event.draggedDataItems[0]);
    });

    setData(reorderedData);
};

  return (
    <div>
      <div><Button onClick={navigateToIndex}>Index Page</Button></div><br />
      <MyGrid
        style={{ height: '700px' }}
        data={data}
        autoProcessData={true}
        dataItemKey="orderID"

        sortable={true}
        defaultSort={[ { field: 'orderDate', dir: 'desc' } ]}

        filterable={true}

        groupable={true}
        defaultGroup={[{ field: 'customerID' }]}

        rowReorderable={{ enabled: true }}
        onRowReorder={handleRowReorder}

        pageable={{ buttonCount: 4, pageSizes: true }}
        defaultSkip={0}
        defaultTake={20}

        detail={DetailComponent}
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