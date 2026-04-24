import * as React from 'react';
import { SchedulerViewItemProps, SchedulerViewItem } from '@progress/kendo-react-scheduler';

export const CustomViewItem = (props: SchedulerViewItemProps) => {
    return (
      <SchedulerViewItem
        {...props}
        style={{
            ...props.style,
            height: 45
        }}
      />
    )
}
