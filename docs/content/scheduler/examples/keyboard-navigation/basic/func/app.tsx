import * as React from 'react';

import { displayDate, sampleData } from './sc-events-utc';
import { Scheduler, TimelineView, DayView, MonthView, SchedulerDataChangeEvent } from '@progress/kendo-react-scheduler';
import { guid } from '@progress/kendo-react-common';

const App = () => {
    const [data, setData] = React.useState(sampleData);

    const handleDataChange = ({ created, updated, deleted }: SchedulerDataChangeEvent) => {
        setData((old) =>
            old
                .filter((item) => deleted.find((current) => current.id === item.id) === undefined)
                .map((item) => updated.find((current) => current.id === item.id) || item)
                .concat(created.map((item) => Object.assign({}, item, { id: guid() })))
        );
    };

    return (
        <Scheduler
            data={data}
            onDataChange={handleDataChange}
            editable={{
                add: true,
                remove: true,
                drag: true,
                resize: true,
                edit: true,
                select: true
            }}
            defaultDate={displayDate}
            defaultView="month"
        >
            <TimelineView />
            <DayView numberOfDays={2} />
            <MonthView />
        </Scheduler>
    );
};

export default App;
