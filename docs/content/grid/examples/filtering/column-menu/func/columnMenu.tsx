import * as React from 'react';
import { GridColumnMenuFilter, GridColumnMenuCheckboxFilter, GridColumnMenuProps } from '@progress/kendo-react-grid';
import products from './gd-products';

export const ColumnMenu = (props: GridColumnMenuProps) => {
    return (
        <div>
            <GridColumnMenuFilter {...props} expanded={true} />
        </div>
    );
};

export const ColumnMenuCheckboxFilter = (props: GridColumnMenuProps) => {
    return (
        <div>
            <GridColumnMenuCheckboxFilter {...props} data={products} expanded={true} />
        </div>
    );
};
