import * as React from 'react';
import { ComboBox, ComboBoxChangeEvent, ComboBoxFilterChangeEvent } from '@progress/kendo-react-dropdowns';

interface EventsLoggerProps {
    events: string[];
}

const EventsLogger = (props: EventsLoggerProps) => {
    return (
        <div className="example-config">
            <h5>Event log</h5>
            <ul className="event-log" style={{ textAlign: 'right' }}>
                {props.events.map((event, index) => {
                    return <li key={index}>{event}</li>;
                })}
            </ul>
        </div>
    );
};

const App = () => {
    const source = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'];
    const [events, setEvents] = React.useState([]);

    const log = (event: string, arg: string) => {
        const eventsLog: any = [...events];
        eventsLog.unshift(`${event} ${arg || ''}`);
        setEvents(eventsLog);
    };

    const onOpen = () => {
        log('open', '');
    };
    const onClose = () => {
        log('close', '');
    };
    const onFocus = () => {
        log('focus', '');
    };
    const onBlur = () => {
        log('blur', '');
    };
    const onChange = (event: ComboBoxChangeEvent) => {
        log('change', event.target.value);
    };
    const onFilterChange = (event: ComboBoxFilterChangeEvent) => {
        log('filterChange', event.filter.value);
    };

    return (
        <div>
            <div>Enter country:</div>
            <ComboBox
                data={source}
                onOpen={onOpen}
                onClose={onClose}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                onFilterChange={onFilterChange}
                filterable={true}
                placeholder="e.g. Austria"
                style={{ width: '300px' }}
            />
            <br />
            <br />
            <EventsLogger events={events} />
        </div>
    );
};

export default App;
