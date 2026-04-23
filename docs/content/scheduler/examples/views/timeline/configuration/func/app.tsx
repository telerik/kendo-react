import * as React from 'react';

import { Scheduler, TimelineView } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';
import { Day } from '@progress/kendo-date-math';

const App = () => {
    return (
        <Scheduler data={sampleData} defaultDate={displayDate}>
            <TimelineView
                title="Hour-By-Hour"
                numberOfDays={2}
                columnWidth={100}
                slotDuration={60}
                slotDivisions={1}
                startTime={'08:00'}
                endTime={'18:00'}
                workDayStart={'09:00'}
                workDayEnd={'17:00'}
                workWeekStart={Day.Sunday}
                workWeekEnd={Day.Monday}
                showWorkHours={false}
            />
        </Scheduler>
    );
};

export default App;
