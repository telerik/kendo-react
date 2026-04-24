import * as React from 'react';
import { SchedulerViewSlot, SchedulerViewSlotProps } from '@progress/kendo-react-scheduler';

export const CustomViewSlot = (props: SchedulerViewSlotProps) => {
    return (
      <SchedulerViewSlot 
        {...props}
        expandable={false}
        style={{
            ...props.style,
            height: 95
        }}
      />
    )
}
