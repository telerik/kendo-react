import * as React from 'react';

import { Scheduler, MonthView, SchedulerResource } from '@progress/kendo-react-scheduler';
import { sampleDataWithResources, displayDate } from './sc-events-utc';

const resources: SchedulerResource[] = [
    {
        name: 'Rooms',
        data: [
            { text: 'Meeting Room 101', value: 1 },
            { text: 'Meeting Room 201', value: 2, color: '#FF7272' }
        ],
        field: 'roomId',
        valueField: 'value',
        textField: 'text',
        colorField: 'color'
    },
    {
        name: 'Persons',
        data: [
            { text: 'Peter', value: 1, color: '#5392E4' },
            { text: 'Alex', value: 2, color: '#54677B' }
        ],
        field: 'personId',
        valueField: 'value',
        textField: 'text',
        colorField: 'color'
    }
];

const App = () => {
    return (
        <Scheduler resources={resources} data={sampleDataWithResources} defaultDate={displayDate}>
            <MonthView />
        </Scheduler>
    );
};

export default App;
