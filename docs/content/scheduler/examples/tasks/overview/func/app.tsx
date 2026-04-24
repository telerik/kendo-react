import * as React from 'react';
import { Scheduler, AgendaView, SchedulerTask, SchedulerTaskProps } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const CustomTask = (props: SchedulerTaskProps) => {
    return (
        <SchedulerTask
            {...props}
            style={{
                ...props.style,
                backgroundColor: props.isAllDay ? '#ccccff' : '#ffcccc',
                borderRadius: '8px',
                height: 32
            }}
        />
    );
};

const App = () => {
    return (
        <Scheduler data={sampleData} defaultDate={displayDate}>
            <AgendaView task={CustomTask} />
        </Scheduler>
    );
};

export default App;
