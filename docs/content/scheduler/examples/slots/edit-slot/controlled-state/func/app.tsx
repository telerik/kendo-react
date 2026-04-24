import * as React from 'react';
import {
    Scheduler,
    TimelineView,
    WeekView,
    SchedulerViewSlot,
    SchedulerEditSlot,
    SchedulerViewSlotProps,
    SchedulerEditSlotProps
} from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const CustomEditSlot = (props: SchedulerEditSlotProps) => {
    const [formItem, setFormItem] = React.useState(null);

    const handleFormItemChange = React.useCallback(
        (event) => {
            if (props.isWorkDay && props.isWorkHour) {
                setFormItem(event.value);
            }
        },
        [props.isWorkDay, props.isWorkHour]
    );

    return <SchedulerEditSlot {...props} formItem={formItem} onFormItemChange={handleFormItemChange} />;
};

const CustomViewSlot = (props: SchedulerViewSlotProps) => {
    return (
        <SchedulerViewSlot
            {...props}
            style={{
                ...props.style,
                cursor: !props.isWorkDay || !props.isWorkHour ? 'no-drop' : undefined
            }}
        />
    );
};

const App = () => {
    return (
        <Scheduler
            data={sampleData}
            defaultDate={displayDate}
            defaultView="week"
            editable={true}
            viewSlot={CustomViewSlot}
            editSlot={CustomEditSlot}
        >
            <WeekView />
            <TimelineView />
        </Scheduler>
    );
};

export default App;
