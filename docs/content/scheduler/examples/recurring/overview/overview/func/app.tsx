import * as React from 'react';
import { Scheduler, AgendaView, DayView, WeekView, MonthView } from '@progress/kendo-react-scheduler';

import { data, displayDate } from './data';

const App = () => {
    return (
      <Scheduler data={data} defaultView={"day"} defaultDate={displayDate} timezone={"Etc/UTC"}>
        <AgendaView />
        <DayView />
        <WeekView />
        <MonthView />
      </Scheduler>
    );
};

export default App;
