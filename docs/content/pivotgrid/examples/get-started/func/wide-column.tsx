import * as React from 'react';
import {
    PivotGridColumn,
    PivotGridColumnProps,
    PivotGridColumnHandle
} from '@progress/kendo-react-pivotgrid';

export const WideColumn = React.forwardRef<PivotGridColumnHandle, PivotGridColumnProps>((props) => {
    return (<PivotGridColumn {...props} style={{width: 200}}/>)
})
