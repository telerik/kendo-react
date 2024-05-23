import * as React from 'react';
import {
  GridColumnMenuFilter,
  GridColumnMenuCheckboxFilter,
} from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';


export const ColumnMenu = (props) => {
  return (
    <div>
      <GridColumnMenuFilter {...props} expanded={true} />
    </div>
  );
};

export const ColumnMenuCheckboxFilter = (props) => {
  return (
    <div>
      <GridColumnMenuCheckboxFilter
        {...props}
        data={filterBy(props.data, props.filter)}
        expanded={true}
      />
    </div>
  );
};
 