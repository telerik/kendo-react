import React from "react";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import { Card } from "@progress/kendo-react-layout";
import { gridTransactions } from "../data/transactions";
import GridStatusBadge from "./GridStatusBadge";
import { ColumnMenu } from "./ColumnMenu";
import { Button } from "@progress/kendo-react-buttons";
import { fileExcelIcon, filePdfIcon } from "@progress/kendo-svg-icons";
import GridAmountCell from "./GridAmountCell";
const DATA_ITEM_KEY = "id";

interface TransactionsProps {
  currency: string;
}

export default function Transactions(props: TransactionsProps) {
  const currency = props.currency;
  let gridPDFExport: GridPDFExport | null;

  const exportPDF = () => {
    if (gridPDFExport !== null) {
      gridPDFExport.save();
    }
  };

  const _export = React.useRef<ExcelExport | null>(null);
  const excelExport = () => {
    if (_export.current !== null) {
      _export.current.save();
    }
  };

  const grid = (
    <Grid
      autoProcessData={true}
      dataItemKey={DATA_ITEM_KEY}
      sortable={true}
      groupable={true}
      data={gridTransactions}
      defaultSkip={0}
      defaultTake={7}
      pageable={{
        buttonCount: 6,
        pageSizes: [7, 14],
      }}
      selectable={{
        enabled: true,
        drag: false,
        cell: false,
        mode: "multiple",
      }}
    >
      <GridToolbar>
        <Button
          style={{ backgroundColor: "#616161" }}
          title="Export Excel"
          type="button"
          svgIcon={fileExcelIcon}
          onClick={excelExport}
        >
          Export to Excel
        </Button>

        <Button
          style={{ backgroundColor: "#616161" }}
          title="Export PDF"
          type="button"
          svgIcon={filePdfIcon}
          onClick={exportPDF}
        >
          Export to PDF
        </Button>
      </GridToolbar>
      <GridColumn columnType="checkbox" width="60px" />
      <GridColumn
        field="dateOfPurchase"
        title="Date"
        width="150px"
        filter="date"
        format="{0:MM/dd/yy}"
        columnMenu={ColumnMenu}
      />
      <GridColumn
        field="amount"
        title="Amount"
        width="150px"
        filter="numeric"
        cells={{ data: (e: any) => GridAmountCell(e, currency) }}
        columnMenu={ColumnMenu}
      />
      <GridColumn
        field="merchant"
        title="Merchant"
        width="150px"
        columnMenu={ColumnMenu}
      />
      <GridColumn
        field="category"
        title="Category"
        width="150px"
        columnMenu={ColumnMenu}
      />
      <GridColumn
        field="paymentMethod"
        title="Payment Method"
        width="175px"
        columnMenu={ColumnMenu}
      />
      <GridColumn
        field="orderStatus"
        title="Status"
        width="150px"
        cells={{ data: GridStatusBadge }}
        columnMenu={ColumnMenu}
      />
    </Grid>
  );

  return (
    <Card className="k-p-4 k-gap-4 k-rounded-lg k-gap-3.5 k-h-full">
      <div className={"k-d-grid k-gap-4"}>
        <div
          style={{
            fontSize: "20px",
            letterSpacing: "wide",
            fontWeight: "500",
          }}
        >
          Transactions
        </div>
      </div>
      <ExcelExport data={gridTransactions} ref={_export}>
        {grid}
      </ExcelExport>
      <GridPDFExport
        ref={(pdfExport: any) => {
          gridPDFExport = pdfExport;
        }}
      >
        {grid}
      </GridPDFExport>
    </Card>
  );
}
