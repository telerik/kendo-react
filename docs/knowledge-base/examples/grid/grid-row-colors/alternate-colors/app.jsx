import * as React from 'react';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './shared-products.json';
const App = () => {
  return (
    <div>
      <Grid
        style={{
          height: '400px',
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
     
     .k-grid .k-table-row {
       background: lightblue;
     }
      .k-grid .k-table-row.k-table-alt-row {
        background: red;
      }

      .k-grid .k-table .k-grid-content-sticky {
        background: lightblue;
      }
      .k-master-row.k-table-alt-row .k-grid-content-sticky {
        background: red;
      }
      `}
      </style>
    </div>
  );
};
export default App;
