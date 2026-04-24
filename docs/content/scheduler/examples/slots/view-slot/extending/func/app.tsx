import * as React from 'react';
import {
    Scheduler,
    TimelineView,
    WeekView,
    SchedulerViewSlot,
    SchedulerViewSlotProps
} from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const CustomViewSlot = (props: SchedulerViewSlotProps) => {
    return (
        <SchedulerViewSlot
            {...props}
            style={{
                ...props.style,
                cursor: !props.isWorkDay || !props.isWorkHour ? 'no-drop' : undefined
            }}
        />
    );
};

const App = () => {
    return (
        <Scheduler
            data={sampleData}
            defaultDate={displayDate}
            defaultView="week"
            editable={true}
            viewSlot={CustomViewSlot}
        >
            <WeekView />
            <TimelineView />
        </Scheduler>
    );
};

export default App;
