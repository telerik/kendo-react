import * as React from 'react';

import { Scheduler, DayView, SchedulerGroup, SchedulerResource } from '@progress/kendo-react-scheduler';
import { data, defaultDate } from './data';

const group: SchedulerGroup = {
    resources: ['Rooms', 'Persons'],
    orientation: 'horizontal'
}
const resources: SchedulerResource[] = [{
    name: 'Rooms',
    data: [
        { text: 'Meeting Room 101', value: 1 },
        { text: 'Meeting Room 201', value: 2 }
    ],
    field: 'roomId',
    valueField: 'value',
    textField: 'text',
    colorField: 'color'
}, {
    // We're changing the name from `Person` to `Persons`.
    name: 'Persons',
    data: [
        { text: 'Peter', value: 1, color: '#5392E4' },
        { text: 'Alex', value: 2, color: '#FF7272' }
    ],
    multiple: true,
    // We're changing the field from `personId` to `PersonIds`.
    field: 'personIds',
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
