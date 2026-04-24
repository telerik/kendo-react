import * as React from 'react';

import { displayDate, sampleData } from './sc-events-utc';
import { Scheduler, TimelineView, WeekView, MonthView } from '@progress/kendo-react-scheduler';
import { guid } from '@progress/kendo-react-common';
import { CustomEditItem } from './custom-item.jsx';

const App = () => {
    const [data, setData] = React.useState(sampleData);

    const handleDataChange = ({ created, updated, deleted }) => {
        setData((old) =>
            old
                // Filter the deleted items
                .filter((item) => deleted.find((current) => current.id === item.id) === undefined)
                // Find and replace the updated items
                .map((item) => updated.find((current) => current.id === item.id) || item)
                // Add the newly created items and assign an `id`.
                .concat(created.map((item) => Object.assign({}, item, { id: guid() })))
        );
    };

    return (
        <Scheduler
            data={data}
            onDataChange={handleDataChange}
            defaultView="week"
            editable={true}
            defaultDate={displayDate}
            editItem={CustomEditItem}
        >
            <TimelineView />
            <WeekView />
            <MonthView />
        </Scheduler>
    );
};

export default App;
