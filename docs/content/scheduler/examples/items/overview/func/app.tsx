import * as React from 'react';
import { Scheduler, DayView, MonthView, SchedulerItem, SchedulerItemProps } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const CustomItem = (props: SchedulerItemProps) => (
    <SchedulerItem {...props} style={{ ...props.style, backgroundColor: props.isAllDay ? 'pink' : 'blue' }} />
);

const App = () => {
    return (
        <Scheduler data={sampleData} defaultDate={displayDate} item={CustomItem}>
            <DayView />
            <MonthView />
        </Scheduler>
    );
};

export default App;
