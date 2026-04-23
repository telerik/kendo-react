import * as React from 'react';

import { Scheduler, DayView } from '@progress/kendo-react-scheduler';
import { guid } from '@progress/kendo-react-common';
import { FormWithAdditionalValidation } from './custom-form';
import { displayDate, sampleData } from './sc-events-utc';

const App = () => {
    const [data, setData] = React.useState(sampleData);

    const handleDataChange = ({ created, updated, deleted }) => {
        setData((old) =>
            old
                .filter((item) => deleted.find((current) => current.id === item.id) === undefined)
                .map((item) => updated.find((current) => current.id === item.id) || item)
                .concat(created.map((item) => Object.assign({}, item, { id: guid() })))
        );
    };

    return (
        <Scheduler
            editable={true}
            defaultDate={displayDate}
            data={data}
            onDataChange={handleDataChange}
            form={FormWithAdditionalValidation}
        >
            <DayView />
        </Scheduler>
    );
};

export default App;
