import * as React from 'react';

import { Scheduler, WeekView, WorkWeekView } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';
import { Day } from '@progress/kendo-date-math';

const App = () => {
    return (
        <Scheduler data={sampleData} defaultDate={displayDate}>
            <WorkWeekView title="Work Week" workWeekStart={Day.Monday} workWeekEnd={Day.Thursday} />
            <WeekView title="Full Week" workWeekStart={Day.Monday} workWeekEnd={Day.Thursday} />
        </Scheduler>
    );
};

export default App;
