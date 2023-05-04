import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';
const App = () => {
  const CellRender = (props) => {
    return <td style={{ whiteSpace: 'nowrap' }}>{props.props.children}</td>;
  };
  return (
    <Grid
      style={{
        height: '400px',
      }}
      data={products}
      cellRender={CellRender}
    >
      <GridColumn field="ProductID" title="ID" width="40px" />
      <GridColumn field="ProductName" title="Name" />
      <GridColumn field="Category.CategoryName" title="CategoryName" />
      <GridColumn field="UnitPrice" title="Price" />
      <GridColumn field="UnitsInStock" title="In stock" />
    </Grid>
  );
};
ReactDOM.render(<App />, document.querySelector('my-app'));
