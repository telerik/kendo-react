import * as React from 'react';
import {
    PivotGridConfiguratorEditor,
    PivotGridConfiguratorEditorProps,
    PivotGridConfiguratorEditorHandle
} from '@progress/kendo-react-pivotgrid';

import { CustomLabel } from './custom-label';

export const CustomEditor = React.forwardRef<
PivotGridConfiguratorEditorHandle, 
PivotGridConfiguratorEditorProps
>((props, ref) => {
    return (
      <PivotGridConfiguratorEditor 
        ref={ref}
        {...props} 
        fieldsLabel={CustomLabel}
        columnAxesLabel={CustomLabel}
        rowAxesLabel={CustomLabel}
        measureAxesLabel={CustomLabel}
      />
    )
})
