import * as React from 'react';
import { GridColumnMenuSort, GridColumnMenuFilter, GridColumnMenuGroup } from '@progress/kendo-react-grid';
export const ColumnMenu = props => {
  return <div>
            <GridColumnMenuSort {...props} />
            <GridColumnMenuFilter {...props} />
            <GridColumnMenuGroup {...props} />
        </div>;
};