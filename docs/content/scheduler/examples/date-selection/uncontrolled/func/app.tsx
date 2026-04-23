import * as React from 'react';

import { Scheduler, MonthView } from '@progress/kendo-react-scheduler';

const data: any[] = [{
    id: 0,
    title: "Holiday",
    start: new Date("2019-08-14T11:00:00Z"),
    end: new Date("2019-08-14T11:01:00Z"),
    isAllDay: true
}]

const defaultDate: Date = new Date("2019-08-01T00:00:00Z");

const App = () => {
    return (
      <Scheduler data={data} defaultDate={defaultDate}>
        <MonthView />
      </Scheduler>
    )
}

export default App;
