import * as React from 'react';
import { SchedulerFormEditor, SchedulerFormEditorProps } from '@progress/kendo-react-scheduler'

export const CustomFormEditor = (props: SchedulerFormEditorProps) => {
    return (
      <SchedulerFormEditor {...props} horizontal={true} />
    )
}
