import * as React from 'react';
import {
    Scheduler,
    MonthView,
    SchedulerSlot,
    useSchedulerEditSlotFormItemContext
} from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const CustomSlot = (props) => {
    const [, setFormItem] = useSchedulerEditSlotFormItemContext();

    const createDataItemFromSlot = React.useCallback(() => {
        const dataItem: any = {};

        dataItem.start = new Date(props.start.getTime());
        dataItem.end = new Date(new Date(props.end.getTime()));
        dataItem.isAllDay = props.isAllDay;

        return dataItem;
    }, [props.end, props.isAllDay, props.start]);

    const handleClick = React.useCallback(
        (event) => {
            const dataItem = createDataItemFromSlot();
            setFormItem(dataItem);

            if (props.onClick) {
                props.onClick(event);
            }
        },
        [createDataItemFromSlot, props, setFormItem]
    );

    return <SchedulerSlot onClick={handleClick} {...props} />;
};

const App = () => {
    return (
        <Scheduler
            data={sampleData}
            defaultDate={displayDate}
            defaultView="month"
            editable={{ add: true, select: true, remove: false, drag: false, resize: false, edit: false }}
        >
            <MonthView slot={CustomSlot} />
        </Scheduler>
    );
};

export default App;
