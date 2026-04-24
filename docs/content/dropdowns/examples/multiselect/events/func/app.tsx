import * as React from 'react';
import {
    MultiSelect,
    MultiSelectBlurEvent,
    MultiSelectChangeEvent,
    MultiSelectCloseEvent,
    MultiSelectFocusEvent,
    MultiSelectOpenEvent
} from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { useAsyncFocusBlur } from '@progress/kendo-react-common';
import countries from './shared-dd-countries';

interface EventsLoggerProps {
    events: string[];
}

const EventsLogger = (props: EventsLoggerProps) => {
    return (
        <div className="example-config">
            <h5>Event log</h5>
            <ul className="event-log" style={{ maxHeight: '300px' }}>
                {props.events.map((event, index) => {
                    return <li key={index}>{event}</li>;
                })}
            </ul>
        </div>
    );
};
const logs: any = [];

const App = () => {
    const [value, setValue] = React.useState<string[]>([]);
    const [events, setEvents] = React.useState(logs);

    const onChange = (event: MultiSelectChangeEvent) => {
        logs.unshift('change: ' + event.value);
        setValue(event.value);
        setEvents(logs.slice());
    };
    const handleBlur = (event: MultiSelectBlurEvent) => {
        logs.unshift('blur');
        setEvents(logs.slice());
    };
    const handleFocus = (event: MultiSelectFocusEvent) => {
        logs.unshift('focus');
        setEvents(logs.slice());
    };
    const onClose = (event: MultiSelectCloseEvent) => {
        logs.unshift('close');
        setEvents(logs.slice());
    };
    const onOpen = (event: MultiSelectOpenEvent) => {
        logs.unshift('open');
        setEvents(logs.slice());
    };
    const { onFocus, onBlur } = useAsyncFocusBlur({
        onFocus: handleFocus,
        onBlur: handleBlur
    });
    return (
        <div className="row">
            <div className="col-sm-6">
                <Label editorId="country">Select country</Label>
                <br />
                <MultiSelect
                    id="country"
                    data={countries}
                    onOpen={onOpen}
                    onClose={onClose}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="e.g. Bulgaria"
                    style={{ width: '250px' }}
                />
            </div>
            <div className="col-sm-6">
                <EventsLogger events={events} />
            </div>
        </div>
    );
};

export default App;
