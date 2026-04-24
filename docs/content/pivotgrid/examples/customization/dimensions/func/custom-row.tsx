import * as React from 'react';
import {
    PivotGridRow,
    PivotGridRowProps,
    PivotGridRowHandle
} from '@progress/kendo-react-pivotgrid';

export const CustomRow = React.forwardRef<PivotGridRowHandle, PivotGridRowProps>((props, ref) => {
    return <PivotGridRow ref={ref} {...props} style={{ height: '100px' }} />
})
