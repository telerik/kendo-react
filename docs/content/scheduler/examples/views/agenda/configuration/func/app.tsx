import * as React from 'react';

import { Scheduler, AgendaView } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const App = () => {
    return (
        <Scheduler data={sampleData} defaultDate={displayDate}>
            <AgendaView
                title="Compact View"
                step={2}
                numberOfDays={2}
                selectedDateFormat={'From: {0:D} To: {1:D}'}
                selectedShortDateFormat={'From: {0:d} To: {1:d}'}
            />
        </Scheduler>
    );
};

export default App;
