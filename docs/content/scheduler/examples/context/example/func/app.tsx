import * as React from 'react';

import { displayDate, sampleData } from './sc-events-utc';
import {
    Scheduler,
    TimelineView,
    DayView,
    MonthView,
    DATA_ACTION,
    SchedulerItem,
    useSchedulerDataContext
} from '@progress/kendo-react-scheduler';
import { guid, Keys } from '@progress/kendo-react-common';

const CustomItem = (props) => {
    const [data, dispatchData] = useSchedulerDataContext();
    const handleKeyDown = React.useCallback(
        (event) => {
            switch (event.syntheticEvent.keyCode) {
                // 68 is "D" on a standard keyboard
                case Keys.backspace:
                    dispatchData({ type: DATA_ACTION.remove, series: props.isRecurring, dataItem: props.dataItem });
                    break;
                case 68:
                    dispatchData({ type: DATA_ACTION.create, series: props.isRecurring, dataItem: props.dataItem });
                    break;
                default:
                    if (props.onKeyDown) {
                        props.onKeyDown(event);
                    }
                    break;
            }
        },
        [dispatchData, props]
    );

    return <SchedulerItem {...props} onKeyDown={handleKeyDown} />;
};

const App = () => {
    const [data, setData] = React.useState(sampleData);

    const handleDataChange = ({ created, updated, deleted }) => {
        setData((old) =>
            old
                // Filter the deleted items
                .filter((item) => !deleted.some((current) => current.id === item.id))
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
            item={CustomItem}
            editable={{
                add: true,
                edit: true,
                select: true,
                drag: true,
                resize: true,
                remove: true
            }}
            defaultDate={displayDate}
        >
            <TimelineView />
            <DayView numberOfDays={2} />
            <MonthView />
        </Scheduler>
    );
};

export default App;
