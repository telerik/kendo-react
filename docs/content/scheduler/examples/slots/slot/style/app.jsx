import * as React from 'react';
import { Scheduler, WeekView, MonthView, SchedulerSlot } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const CustomSlot = (props) => (
    <SchedulerSlot
        {...props}
        style={{
            ...props.style,
            borderBottom: props.isAllDay ? '1px solid red' : undefined
        }}
    />
);

const App = () => {
    return (
        <Scheduler data={sampleData} defaultDate={displayDate} defaultView="week">
            <WeekView slot={CustomSlot} />
            <MonthView />
        </Scheduler>
    );
};

export default App;
