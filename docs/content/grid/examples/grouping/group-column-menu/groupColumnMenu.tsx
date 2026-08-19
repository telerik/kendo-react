import * as React from 'react';
import { GridColumnMenuGroup, GridColumnMenuGroupBaseProps } from '@progress/kendo-react-grid';

export const GroupColumnMenu = (props: GridColumnMenuGroupBaseProps) => {
    return (
        <div>
            <GridColumnMenuGroup {...props} />
        </div>
    );
};
