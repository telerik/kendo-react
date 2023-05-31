import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

const products = [
  {
    ProductID: 1,
    ProductName: 'Product name',
    Category: {
      CategoryName: 'CategoryName 1',
    },
    UnitPrice: 18.0,
    UnitsInStock: 39,
  },
  {
    ProductID: 2,
    ProductName: 'Some long product name',
    Category: {
      CategoryName: 'CategoryName 2',
    },
    UnitPrice: 18.0,
    UnitsInStock: 39,
  },
];

const getColumnIDByField = (grid, field) => {
  let column = grid.columns.find((col) => col.field == field);
  return column ? column.id : '';
};

const App = () => {
  const gridRef = React.createRef();

  React.useEffect(() => {
    //using method for finding the column ID by field name (can be modified to search for title or other column property)
    let productNameID = getColumnIDByField(gridRef.current, 'ProductName');
    //getting the ID directly from a column from the columns collection
    let lastColumnID = 
      gridRef.current.columns[gridRef.current.columns.length - 1].id;

    gridRef.current.fitColumns([productNameID, lastColumnID]);
  }, []);

  return (
    <Grid
      ref={gridRef}
      resizable={true}
      style={{
        height: '400px',
      }}
      data={products}
    >
      <GridColumn field="ProductID" title="ID" width="40px" />
      <GridColumn field="ProductName" title="Name" width="50px" />
      <GridColumn field="Category.CategoryName" title="CategoryName" />
      <GridColumn field="UnitPrice" title="Price" />
      <GridColumn field="UnitsInStock" title="In stock" />
    </Grid>
  );
};

ReactDOM.render(<App />, document.querySelector('my-app'));
