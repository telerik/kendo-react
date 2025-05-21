import React from 'react';
import {
    GridColumnMenuSort,
    GridColumnMenuFilter
} from '@progress/kendo-react-grid';

export const ColumnMenu = (props) => {
    return (
        <div>
            <GridColumnMenuSort {...props} />
            <GridColumnMenuFilter {...props} />
        </div>
    );
}