import * as React from 'react';
import {
  GridColumnMenuFilter,
  GridColumnMenuCheckboxFilter,
} from '@progress/kendo-react-grid';
export const ColumnMenu = (props) => {
  return (
    <div>
      <GridColumnMenuFilter {...props} expanded={true} />
    </div>
  );
};

export const ProductNameolumnMenuCheckboxFilter = (props) => {
  return (
    <div>
      <GridColumnMenuCheckboxFilter
        {...props}
        data={[{ ProductName: 'Cha' }, { ProductName: 'Gra' }]}
        expanded={true}
      />
    </div>
  );
};
