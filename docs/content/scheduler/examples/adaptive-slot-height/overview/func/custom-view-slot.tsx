import * as React from 'react';
import { SchedulerViewSlot, SchedulerViewSlotProps } from '@progress/kendo-react-scheduler';

export const CustomViewSlot = (props: SchedulerViewSlotProps) => {
    return (
      <SchedulerViewSlot 
        {...props}
        style={{
            ...props.style,
            minHeight: 120
        }}
      />
    )
}
