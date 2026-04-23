import * as React from 'react';

import { Scheduler, DayView, SchedulerGroup, SchedulerResource } from '@progress/kendo-react-scheduler';
import { data, defaultDate } from './data';

const group: SchedulerGroup = {
    resources: ['Rooms', 'Person'],
    orientation: "horizontal"
}
const resources: SchedulerResource[] = [{
    name: 'Rooms',
    data: [
        { text: 'Meeting Room 101', value: 1, color: '#5392E4' },
        { text: 'Meeting Room 201', value: 2, color: '#FF7272' }
    ],
    field: 'roomId',
    valueField: 'value',
    textField: 'text',
    colorField: 'color'
}, {
    name: 'Person',
    data: [
        { text: 'Peter', value: 1 },
        { text: 'Alex', value: 2 }
    ],
    field: 'personId',
    valueField: 'value',
    textField: 'text',
    colorField: 'color'
}]

const App = () => {
    return (
      <Scheduler
        group={group}
        resources={resources}

        data={data}
        defaultDate={defaultDate}

        timezone={"Etc/UTC"}
        >
        <DayView />
      </Scheduler>
    )
}

export default App;
