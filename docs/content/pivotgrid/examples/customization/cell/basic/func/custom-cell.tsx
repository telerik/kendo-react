import * as React from 'react';
import {
    PivotGridCell, 
    PivotGridCellProps,
    PivotGridCellHandle 
} from '@progress/kendo-react-pivotgrid';

export const CustomCell = React.forwardRef<PivotGridCellHandle, PivotGridCellProps>((props, ref) => {
    return <PivotGridCell ref={ref} {...props} style={{color: props.total ? 'red' : undefined}} />
})
