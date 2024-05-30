import * as React from 'react';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './shared-products.json';
const App = () => {
  return (
    <div>
      <Grid
        className={'myGridClassName'}
        style={{
          height: '400px',
        }}
        data={products}
      >
        <GridColumn field="ProductID" title="ID" width="40px" />
        <GridColumn field="ProductName" title="Name" />
        <GridColumn field="Category.CategoryName" title="CategoryName" />
        <GridColumn field="UnitPrice" title="Price" />
        <GridColumn field="UnitsInStock" title="In stock" />
      </Grid>
      <style>
      {`
      .myGridClassName.k-grid td, .myGridClassName.k-grid .k-table-td {
        white-space: nowrap !important;
        text-overflow: clip !important;
      }
      `}
      </style>
    </div>
  );
};
export default App;
