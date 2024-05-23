import * as React from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

import products from './products.json';

const App = () => {
  const calculateWidth = (field) => {
    let maxWidth = 0;
    products.forEach((item) => {
      const size = getTextWidth(item[field], 'normal 14px sans-serif') + 12;
      if (size > maxWidth) {
        maxWidth = size;
      }
    });
    return maxWidth;
  };

  function getTextWidth(text, font) {
    const canvas =
      getTextWidth.canvas ||
      (getTextWidth.canvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
  }

  return (
    <Grid
      style={{
        height: '400px',
      }}
      data={products}
    >
      <GridColumn field="ProductID" title="ID" width="40px" />
      <GridColumn
        field="ProductName"
        title="Name"
        width={calculateWidth('ProductName')}
      />
      <GridColumn field="Category.CategoryName" title="CategoryName" />
      <GridColumn field="UnitPrice" title="Price" />
      <GridColumn field="UnitsInStock" title="In stock" />
    </Grid>
  );
};

export default App;