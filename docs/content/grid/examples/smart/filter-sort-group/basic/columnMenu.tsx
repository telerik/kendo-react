import * as React from 'react';
import { GridColumnMenuFilter, GridColumnMenuProps } from '@progress/kendo-react-grid';


export const ColumnMenu = (props: GridColumnMenuProps) => {
    return (
        <div>
            <GridColumnMenuFilter {...props} expanded={true} />
        </div>
    );
};
