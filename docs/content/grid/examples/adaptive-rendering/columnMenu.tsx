import * as React from 'react';
import {
    GridColumnMenuFilter,
    GridColumnMenuProps,
    GridColumnMenuColumnsChooser,
    GridColumnMenuCheckboxFilter,
    GridColumnMenuSort,
    GridColumnMenuGroup
} from '@progress/kendo-react-grid';
import { Product } from './gd-interfaces';

interface CustomGridColumnMenuProps extends GridColumnMenuProps {
    data: Product[];
}
const ColumnMenu = (props: CustomGridColumnMenuProps) => {
    return (
        <div>
            <GridColumnMenuSort {...props} />
            <GridColumnMenuGroup {...props} />
            <GridColumnMenuFilter {...props} />
            <GridColumnMenuColumnsChooser {...props} />
            <GridColumnMenuCheckboxFilter {...props} data={props.data} />
        </div>
    );
};

export default ColumnMenu;
