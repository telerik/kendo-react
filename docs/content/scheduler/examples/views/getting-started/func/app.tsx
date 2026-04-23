import * as React from 'react';

import { Scheduler, DayView, WeekView } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const App = () => {
    return (
        <Scheduler data={sampleData} defaultDate={displayDate}>
            <DayView />
            <WeekView />
        </Scheduler>
    );
};

export default App;
