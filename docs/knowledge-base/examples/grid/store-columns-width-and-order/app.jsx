import * as React from 'react';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
const products = [
  {
    ProductName: 'Name',
    ProductID: 1,
    Category: 'Category',
    UnitPrice: 10,
    UnitsInStock: 2,
  },
];
let loadedColumns = localStorage.getItem('gridColumns');
const GridColumns = loadedColumns
  ? JSON.parse(loadedColumns)
  : [
      //here you can define the initial columns configuration
      { field: 'ProductID', width: 200 },
      { field: 'ProductName', width: 200 },
      { field: 'Category', width: 200 },
      { field: 'UnitPrice', width: 200 },
      { field: 'UnitsInStock', width: 200 },
    ];

const App = () => {
  const [columns, setColumns] = React.useState(GridColumns);
  const gridRef = React.useRef();

  const onColumnReorder = (props) => {
    setColumns(props.columns); 
    saveColumnsState(props.columns);
  };
  const onColumnResize = (props) => {
    setColumns(props.columns);
    saveColumnsState(props.columns);
  };

  const saveColumnsState = (columns) => {
    let currentColumnsState = JSON.stringify(columns);
    localStorage.setItem('gridColumns', currentColumnsState);
  };
  return (
    <div>
      <Grid
        ref={gridRef}
        style={{
          height: '400px',
        }}
        onColumnReorder={onColumnReorder}
        onColumnResize={onColumnResize}
        data={products}
        reorderable={true}
        resizable={true}
      >
        {columns.map((column, index) => {
          return <GridColumn key={index} {...column} />;
        })}
      </Grid>
    </div>
  );
};

export default App;
