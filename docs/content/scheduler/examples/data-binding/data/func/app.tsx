import * as React from 'react';
import { Scheduler, DayView } from '@progress/kendo-react-scheduler';

const displayDate: Date = new Date("2019-08-27T08:00:00.000Z")
const data: any[] = [{
    id: 0,
    title: 'Breakfast with Tom',
    start: new Date("2019-08-27T08:30:00.000Z"),
    end: new Date("2019-08-27T09:00:00.000Z")
}]

const App = () => {
    return (
      <Scheduler data={data} defaultDate={displayDate} timezone="Etc/UTC">
        <DayView />
      </Scheduler>
    )
}

export default App;
