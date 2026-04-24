import * as React from 'react';
import { GridColumnMenuCheckboxFilter, GridColumnMenuProps } from '@progress/kendo-react-grid';
import products from './gd-products';

export const ColumnMenu = (props: GridColumnMenuProps) => {
    return (
        <div>
            <GridColumnMenuCheckboxFilter {...props} data={products} expanded={true} searchBox={() => null} />
        </div>
    );
};
