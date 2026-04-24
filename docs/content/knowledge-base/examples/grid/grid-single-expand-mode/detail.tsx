import React from 'react';

import { GridDetailRowProps } from '@progress/kendo-react-grid';

export const DetailComponent = (props: GridDetailRowProps) => {
  const dataItem = props.dataItem;
  return (
    <section>
      <p>
        <strong>In Stock:</strong> {dataItem.UnitsInStock} units
      </p>
      <p>
        <strong>On Order:</strong> {dataItem.UnitsOnOrder} units
      </p>
      <p>
        <strong>Reorder Level:</strong> {dataItem.ReorderLevel} units
      </p>
      <p>
        <strong>Discontinued:</strong> {dataItem.Discontinued}
      </p>
      <p>
        <strong>Category:</strong> {dataItem.Category.CategoryName} -{' '}
        {dataItem.Category.Description}
      </p>
    </section>
  );
};
