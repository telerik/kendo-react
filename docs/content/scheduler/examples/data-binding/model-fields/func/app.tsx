import * as React from 'react';
import { Scheduler, DayView, SchedulerModelFields } from '@progress/kendo-react-scheduler';

const displayDate: Date = new Date("2019-08-26T21:00:00.000Z")

const data: any[] = [{
    TaskID: 0,
    Subject: 'Breakfast with Tom',
    Start: new Date("2019-08-27T05:30:00.000Z"),
    End: new Date("2019-08-27T06:00:00.000Z")
}, {
    TaskID: 1,
    Subject: 'Lunch with Loren',
    Start: new Date("2019-08-27T09:00:00.000Z"),
    End: new Date("2019-08-27T10:00:00.000Z")
}]

const modelFields: SchedulerModelFields = {
    id: 'TaskID',
    title: 'Subject',
    start: 'Start',
    end: 'End'
}

const App = () => {
    return (
      <Scheduler data={data} defaultDate={displayDate} modelFields={modelFields}>
        <DayView />
      </Scheduler>
    )
}

export default App;
