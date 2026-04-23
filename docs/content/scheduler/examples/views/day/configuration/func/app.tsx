import * as React from 'react';

import { Scheduler, DayView } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const App = () => {
    return (
        <Scheduler data={sampleData} defaultDate={displayDate}>
            <DayView
                title="Two-Day-View"
                numberOfDays={2}
                slotDuration={60}
                slotDivisions={2}
                startTime={'07:00'}
                endTime={'19:00'}
                workDayStart={'08:00'}
                workDayEnd={'18:00'}
            />
        </Scheduler>
    );
};

export default App;
