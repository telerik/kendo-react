import * as React from 'react';
import { SchedulerForm, SchedulerFormProps } from '@progress/kendo-react-scheduler';
import { CustomFormDialog } from './custom-form-dialog'

export const FormWithCustomDialog = (props: SchedulerFormProps) => {
    return (<SchedulerForm
      {...props}
      dialog={CustomFormDialog}
    />)
}
