import * as React from 'react';

import { Scheduler, AgendaView, TimelineView, DayView, WeekView, MonthView } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const App = () => {
    return (
        <div
        // Or alternatively, the Scheduler will auto-detect rtl mode!
        // style={{ direction: 'rtl' }}
        >
            <Scheduler rtl={true} defaultDate={displayDate} data={sampleData}>
                <AgendaView />
                <TimelineView />
                <DayView />
                <WeekView />
                <MonthView />
            </Scheduler>
        </div>
    );
};

export default App;
