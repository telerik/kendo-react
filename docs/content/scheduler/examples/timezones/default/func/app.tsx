import * as React from 'react';

import { Scheduler, DayView } from '@progress/kendo-react-scheduler';

const date = new Date('2018-10-21T00:00:00');
const data = [{
    id: 0,
    start: new Date('2018-10-21T09:00:00Z'),
    end: new Date('2018-10-21T09:30:00Z'),
    title: '9am UTC'
}]

const App = () => {
    return (
      <Scheduler data={data} defaultDate={date}>
        {/* To be sure the event is visible, we will disabled showing `work hours` only */}
        <DayView showWorkHours={false}/>
      </Scheduler>
    )
}

export default App;
