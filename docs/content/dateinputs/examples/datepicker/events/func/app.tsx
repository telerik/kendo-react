import * as React from 'react';

import {
    DatePicker,
    DatePickerChangeEvent,
    DatePickerCloseEvent,
    DatePickerOpenEvent
} from '@progress/kendo-react-dateinputs';
import { useAsyncFocusBlur } from '@progress/kendo-react-common';

interface EventLogProps {
    logs: string[];
    title: string;
}

const EventLog = (props: EventLogProps) => {
    const renderLogs = () => props.logs.map((log, index) => <li key={index}>{log}</li>);

    return (
        <div className="example-config">
            <h5>{props.title}</h5>
            <ul className="event-log" style={{ maxHeight: '300px' }}>
                {renderLogs()}
            </ul>
        </div>
    );
};

const logs: any = [];
const App = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    const [events, setEvents] = React.useState(logs);

    const handleChange = (event: DatePickerChangeEvent) => {
        logs.unshift('change: ' + event.target.value);
        setValue(event.target.value);
        setEvents(logs.slice());
    };
    const handleBlur = (event: React.FocusEvent<HTMLDivElement | HTMLSpanElement, Element>) => {
        logs.unshift('blur');
        setEvents(logs.slice());
    };
    const handleFocus = (event: React.FocusEvent<HTMLDivElement | HTMLSpanElement, Element>) => {
        logs.unshift('focus');
        setEvents(logs.slice());
    };
    const handleClose = (event: DatePickerCloseEvent) => {
        logs.unshift('close');
        setEvents(logs.slice());
    };
    const handleOpen = (event: DatePickerOpenEvent) => {
        logs.unshift('open');
        setEvents(logs.slice());
    };
    const { onFocus, onBlur } = useAsyncFocusBlur({
        onFocus: handleFocus,
        onBlur: handleBlur
    });

    return (
        <div className="row">
            <div className="col-md-6">
                <DatePicker
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={value}
                />
            </div>
            <div className="col-md-6">
                <EventLog logs={events} title={'DatePicker Events'} />
            </div>
        </div>
    );
};

export default App;
