import * as React from 'react';
import {
    PivotGridRow,
    PivotGridRowProps,
    PivotGridRowHandle
} from '@progress/kendo-react-pivotgrid';

export const CustomColumnHeadersRow = React.forwardRef<PivotGridRowHandle, PivotGridRowProps>((props, ref) => {
    return <PivotGridRow ref={ref} {...props} style={{ height: '50px' }} />
})
