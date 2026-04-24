import * as React from 'react';
import {
    Scheduler,
    WeekView
} from '@progress/kendo-react-scheduler';
import { serverData } from './server-data';
const displayDate = new Date('2019-09-02T08:00:00.000Z')

const App = () => {
    return (
      <Scheduler data={serverData} defaultDate={displayDate} timezone={"Etc/UTC"}>
        <WeekView/>
      </Scheduler>
    );
};

export default App;
