import * as React from 'react';
import { Scheduler, DayView } from '@progress/kendo-react-scheduler';

import '@progress/kendo-date-math/tz/America/New_York';

const date = new Date('2018-10-21T00:00:00');
const data = [{
    id: 1,
    start: new Date('2018-10-21T13:00:00Z'),
    end: new Date('2018-10-21T13:30:00Z'),
    title: '9am EDT'
}];

const App = () => {
    return (
      <Scheduler
        timezone="America/New_York"

        data={data}
        defaultDate={date}
        >
        <DayView />
      </Scheduler>
    )
}

export default App;
