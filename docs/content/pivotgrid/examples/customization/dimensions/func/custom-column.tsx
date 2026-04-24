import * as React from 'react';
import {
    PivotGridColumn,
    PivotGridColumnProps,
    PivotGridColumnHandle
} from '@progress/kendo-react-pivotgrid';

export const CustomColumn = React.forwardRef<PivotGridColumnHandle, PivotGridColumnProps>((props, ref) => {
    return <PivotGridColumn ref={ref} {...props} style={{ width: '200px' }} />
})
