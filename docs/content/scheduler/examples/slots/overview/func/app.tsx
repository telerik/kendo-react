import * as React from 'react';
import { Scheduler, WeekView, SchedulerSlot, SchedulerSlotProps } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const CustomSlot = (props: SchedulerSlotProps) => (
    <SchedulerSlot
        {...props}
        style={{
            ...props.style,
            backgroundColor: props.isAllDay || !props.isWorkHour || !props.isWorkDay ? '#ffddcc' : '#ccff99'
        }}
    />
);

const App = () => {
    return (
        <Scheduler data={sampleData} defaultDate={displayDate} slot={CustomSlot}>
            <WeekView />
        </Scheduler>
    );
};

export default App;
