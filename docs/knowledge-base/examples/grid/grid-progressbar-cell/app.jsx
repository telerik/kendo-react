import * as React from 'react';

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';
import { ProgressBar } from '@progress/kendo-react-progressbars';
const ProgressCell = (props) => {
  if (props.rowType == 'data') { //ensuring that we are not passing the custom cell to group headers if grouping is enabled
    let content = (
      <td
        colSpan={props.colSpan}
        role={'gridcell'}
        aria-colindex={props.ariaColumnIndex}
        aria-selected={props.isSelected}
      >
        <ProgressBar
          value={props.dataItem.UnitPrice}
          style={{ width: '100%' }}
        />
      </td>
    );
    //Using the props.render ensures that the cellRender will be called for the custom cell
    return props.render
      ? props.render.call(undefined, content, props)
      : content;
  } else {
    return null;
  }
};
const App = () => {
  return (
    <Grid
      style={{
        height: '400px',
      }}
      data={products}
    >
      <GridColumn field="ProductID" title="ID" width="40px" />
      <GridColumn field="ProductName" title="Name" width="250px" />
      <GridColumn field="Category.CategoryName" title="CategoryName" />
      <GridColumn
        field="UnitPrice"
        title="Price"
        cell={ProgressCell}
        width={'200px'}
      />
      <GridColumn field="UnitsInStock" title="In stock" />
    </Grid>
  );
};

export default App;
