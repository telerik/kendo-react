import * as React from 'react';

import { SchedulerFormEditor, SchedulerFormEditorProps } from '@progress/kendo-react-scheduler'
import { Error } from '@progress/kendo-react-labels';

const LazyError = (props) => {
    return props.visited ? <Error {...props} /> : null
}

export const CustomFormEditor = (props: SchedulerFormEditorProps) => {
    return (
      <SchedulerFormEditor
        {...props}
        titleError={LazyError}
        startError={LazyError}
        startTimezoneError={LazyError}
        endError={LazyError}
        endTimezoneError={LazyError}
        descriptionError={LazyError}
        />
    )
}
