import * as React from 'react';

import { SchedulerForm, SchedulerFormProps } from '@progress/kendo-react-scheduler';
import { CustomFormEditor } from './custom-form-editor'

export const FormWithCustomEditor = (props: SchedulerFormProps) => {
    return (
      <SchedulerForm
        {...props}
        editor={CustomFormEditor}
        />)
}
