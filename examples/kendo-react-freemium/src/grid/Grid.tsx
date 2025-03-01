"use client"

import * as React from "react";

import {
    Grid,
    GridColumn,
    GridToolbar,
    GridDetailRowProps,
    GridDataStateChangeEvent,
    GridExpandChangeEvent
} from "@progress/kendo-react-grid";

import { GridPDFExport } from "@progress/kendo-react-pdf";
import { ExcelExport } from "@progress/kendo-react-excel-export";

import { DataResult, process, State } from "@progress/kendo-data-query";
import data from "./data.json";
import { Button } from "@progress/kendo-react-buttons";
import { Link } from "react-router-dom";
import { AppBar, AppBarSection } from "@progress/kendo-react-layout";

const DetailComponent = (props: GridDetailRowProps) => {
    const dataItem = props.dataItem;

    return (
      <div>
        <section style={{ width: "200px", float: "left" }}>
          <p>
            <strong>Street:</strong> {dataItem.shipAddress.street}
          </p>
          <p>
            <strong>City:</strong> {dataItem.shipAddress.city}
          </p>
          <p>
            <strong>Country:</strong> {dataItem.shipAddress.country}
          </p>
          <p>
            <strong>Postal Code:</strong> {dataItem.shipAddress.postalCode}
          </p>
        </section>
        <Grid style={{ width: "500px" }} data={dataItem.details} />
      </div>
    );
};

export default function GridVite() {
    const [dataState, setDataState] = React.useState<State>({
        skip: 0,
        take: 20,
        sort: [{ field: "orderDate", dir: "desc" }],
        group: [{ field: "customerID" }]
    });
    const [dataResult, setDataResult] = React.useState<DataResult>(
        process(data, dataState)
    );

    const dataStateChange = (event: GridDataStateChangeEvent) => {
        setDataResult(process(data, event.dataState));
        setDataState(event.dataState);
    };

    const expandChange = (event: GridExpandChangeEvent) => {
        const isExpanded =
      event.dataItem.expanded === undefined
          ? event.dataItem.aggregates
          : event.dataItem.expanded;
        event.dataItem.expanded = !isExpanded;

        setDataResult({ ...dataResult, data: [...dataResult.data] });
    };

    let _pdfExport: GridPDFExport | null;
    const exportExcel = () => {
        if (_export) {
            _export.save();
        }
    };

    let _export: ExcelExport | null;
    const exportPDF = () => {
        if (_pdfExport) {
            _pdfExport.save();
        }
    };

    return (
      <>
        <AppBar position="top">
          <AppBarSection>
            <Link to="/">
              <Button themeColor="primary" fillMode="flat" className="k-mr-1">Go Back</Button>
            </Link>
          </AppBarSection>
        </AppBar>
        <div className="k-mt-4">
          <ExcelExport
            data={data}
            ref={(exporter) => {
              _export = exporter;
            }}
          >
            <Grid
              id="test"
              style={{ height: "700px" }}
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
              <GridToolbar>
                <Button
                  title="Export to Excel"
                  onClick={exportExcel}
                >
                  Export to Excel
                </Button>
                &nbsp;
                <Button
                  onClick={exportPDF}
                >
                  Export to PDF
                </Button>
              </GridToolbar>
              <GridColumn field="customerID" width="200px" />
              <GridColumn
                field="orderDate"
                filter="date"
                format="{0:D}"
                width="300px"
              />
              <GridColumn field="shipName" width="280px" />
              <GridColumn field="freight" filter="numeric" width="200px" />
              <GridColumn
                field="shippedDate"
                filter="date"
                format="{0:D}"
                width="300px"
              />
              <GridColumn field="employeeID" filter="numeric" width="200px" />
              <GridColumn
                locked={true}
                field="orderID"
                filterable={false}
                title="ID"
                width="90px"
              />
            </Grid>
          </ExcelExport>
          <GridPDFExport
            ref={(element) => {
              _pdfExport = element;
            }}
            margin="1cm"
          >
            {
              <Grid
                data={process(data, {
                  skip: dataState.skip,
                  take: dataState.take
                })}
              >
                <GridColumn field="customerID" width="200px" />
                <GridColumn
                  field="orderDate"
                  filter="date"
                  format="{0:D}"
                  width="300px"
                />
                <GridColumn field="shipName" width="280px" />
                <GridColumn field="freight" filter="numeric" width="200px" />
                <GridColumn
                  field="shippedDate"
                  filter="date"
                  format="{0:D}"
                  width="300px"
                />
                <GridColumn field="employeeID" filter="numeric" width="200px" />
                <GridColumn
                  locked={true}
                  field="orderID"
                  filterable={false}
                  title="ID"
                  width="90px"
                />
              </Grid>
            }
          </GridPDFExport>
        </div>
      </>
    );
}