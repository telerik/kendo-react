import * as React from 'react';
import {
    Label,
    LabelProps
} from '@progress/kendo-react-labels';
import { FieldProps } from '@progress/kendo-react-form';

export const CustomLabel = (props: LabelProps & FieldProps) => {
    return (
      <Label
        {...props}
        style={{ color: '#3f51b5' }} 
      >
        {props.children}{":"}
      </Label>
    )
}
