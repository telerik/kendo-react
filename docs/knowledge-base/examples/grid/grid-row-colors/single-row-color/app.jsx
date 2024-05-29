import * as React from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import products from "./shared-products.json";
const App = () => {
  return (
    <div>
      <Grid
        style={{
          height: "400px",
        }}
        data={products}
      >
        <GridColumn field="ProductID" title="ID" width="40px" locked />
        <GridColumn field="ProductName" title="Name" width="250px" />
        <GridColumn field="Category.CategoryName" title="CategoryName" />
        <GridColumn field="UnitPrice" title="Price" />
        <GridColumn field="UnitsInStock" title="In stock" />
      </Grid>
      <style>
    {`
    .k-grid .k-table-row:nth-child(2) {
      background: lightblue;
    }
    `}
      </style>
    </div>
  );
};
export default App;
