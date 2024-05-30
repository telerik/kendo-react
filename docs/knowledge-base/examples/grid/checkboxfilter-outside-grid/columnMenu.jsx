import * as React from 'react';
import { GridColumnMenuCheckboxFilter } from '@progress/kendo-react-grid';
import products from './products.json';
export const ColumnMenu = (props) => {
  return (
    <div>
      <GridColumnMenuCheckboxFilter
        {...props}
        data={products}
        expanded={true}
        searchBox={() => null}
      />
    </div>
  );
};
