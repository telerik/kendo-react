import * as React from 'react';
import {
    GridColumnMenuFilter,
    GridColumnMenuGroup,
    GridColumnMenuProps,
    GridColumnMenuSort,
    GridColumnMenuColumnsChooser
} from '@progress/kendo-react-grid';

export const ColumnMenu = (props: GridColumnMenuProps) => {
    return (
        <div>
            <GridColumnMenuSort {...props} />
            <GridColumnMenuFilter {...props} />
            <GridColumnMenuGroup {...props} />
            <GridColumnMenuColumnsChooser {...props} />
        </div>
    );
};
