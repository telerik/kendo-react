import * as React from "react";
import {
  LocalizationProvider,
  IntlProvider,
  load,
  loadMessages,
} from "@progress/kendo-react-intl";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { Button } from "@progress/kendo-react-buttons";

import likelySubtags from "cldr-core/supplemental/likelySubtags.json";
import currencyData from "cldr-core/supplemental/currencyData.json";
import weekData from "cldr-core/supplemental/weekData.json";

import numbers from "cldr-numbers-full/main/es/numbers.json";
import currencies from "cldr-numbers-full/main/es/currencies.json";
import caGregorian from "cldr-dates-full/main/es/ca-gregorian.json";
import dateFields from "cldr-dates-full/main/es/dateFields.json";

import orders from "./data/orders.json";
import {
  Grid,
  GridToolbar,
  GridColumn,
  GridDetailRowProps,
} from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";

import timeZoneNames from "cldr-dates-full/main/es/timeZoneNames.json";
import esMessages from "./data/es.json";
import { NavigationRow, Navigation } from "../components/Navigation/";

load(
  likelySubtags,
  currencyData,
  weekData,
  numbers,
  currencies,
  caGregorian,
  dateFields,
  timeZoneNames
);

loadMessages(esMessages, "es-ES");

orders.forEach((o: any) => {
  o.orderDate = new Date(o.orderDate);
  o.shippedDate =
    o.shippedDate === "NULL" ? undefined : new Date(o.shippedDate);
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
      <Grid style={{ width: "500px" }} data={dataItem.details}></Grid>
    </div>
  );
};

const locales = [
  {
    language: 'en-US',
    locale: 'en'
  },
  {
    language: 'es-ES',
    locale: 'es'
  }
];

export const VirtualizedPage = () => {
  const [currentLocale, setCurrentLocale] = React.useState(locales[0]);
  const exportRef = React.useRef<ExcelExport | null>(null);
  const pdfExportRef = React.useRef<GridPDFExport | null>(null);

  const exportExcel = () => {
    exportRef.current?.save();
  };

  const exportPDF = () => {
    pdfExportRef.current?.save();
  };

  return (
    <>
      <div className="container my-3">
        <NavigationRow className="row justify-content-center">
          <Navigation className="col-12 flex-grow-1 text-center" />
        </NavigationRow>
      </div>
      <div className="container">
        <LocalizationProvider language={currentLocale.language}>
          <IntlProvider locale={currentLocale.locale}>
            <div>
              <ExcelExport
                data={orders}
                ref={exportRef}
              >
                <Grid
                  style={{ height: '700px' }}
                  sortable
                  defaultSort={[
                    { field: 'orderDate', dir: 'desc' }
                  ]}
                  filterable
                  groupable
                  defaultGroup={[
                    { field: 'customerID' }
                  ]}
                  reorderable
                  pageable={{ buttonCount: 4, pageSizes: true }}
                  defaultSkip={0}
                  defaultTake={20}
                  data={orders}
                  autoProcessData={true}
                  dataItemKey="orderID"
                  detail={DetailComponent}
                >
                  <GridToolbar>
                    Locale:&nbsp;&nbsp;&nbsp;
                    <DropDownList
                      style={{ border: 'none' }}
                      value={currentLocale}
                      textField="language"
                      onChange={(e) => { setCurrentLocale(e.target.value); }}
                      data={locales} />&nbsp;&nbsp;&nbsp;
                    <Button
                      title="Export to Excel"
                      themeColor="primary"
                      fillMode="solid"
                      onClick={exportExcel}
                    >
                      Export to Excel
                    </Button>&nbsp;
                    <Button
                      title="Export to PDF"
                      themeColor="primary"
                      fillMode="solid"
                      onClick={exportPDF}>Export to PDF</Button>
                  </GridToolbar>
                  <GridColumn field="customerID" width="200px" />
                  <GridColumn field="orderDate" filter="date" format="{0:D}" width="300px" />
                  <GridColumn field="shipName" width="280px" />
                  <GridColumn field="freight" filter="numeric" width="200px" />
                  <GridColumn field="shippedDate" filter="date" format="{0:D}" width="300px" />
                  <GridColumn field="employeeID" filter="numeric" width="200px" />
                  <GridColumn field="orderID" filterable={false} title="ID" width="90px" />
                </Grid>
              </ExcelExport>
              <GridPDFExport
                ref={pdfExportRef}
                margin="1cm" >
                {<Grid data={orders}>
                    <GridColumn field="customerID" width="200px" />
                    <GridColumn field="orderDate" filter="date" format="{0:D}" width="300px" />
                    <GridColumn field="shipName" width="280px" />
                    <GridColumn field="freight" filter="numeric" width="200px" />
                    <GridColumn field="shippedDate" filter="date" format="{0:D}" width="300px" />
                    <GridColumn field="employeeID" filter="numeric" width="200px" />
                    <GridColumn field="orderID" filterable={false} title="ID" width="90px" />
                  </Grid>}
              </GridPDFExport>
            </div>
          </IntlProvider>
        </LocalizationProvider>
      </div>
    </>
  );
};
