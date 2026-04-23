import * as React from 'react';

import { ComboBoxChangeEvent, ComboBoxFilterChangeEvent, MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import { employees } from './shared-dd-data';

interface EventsLoggerProps {
    events: string[];
}

const columns = [
    { field: 'id', header: 'ID', width: '200px' },
    { field: 'name', header: 'Name', width: '200px' },
    { field: 'position', header: 'Position', width: '300px' }
];

const EventsLogger = (props: EventsLoggerProps) => {
    return (
        <div className="example-config">
            <h5>Event log</h5>
            <ul className="event-log" style={{ textAlign: 'right' }}>
                {props.events.map(function (event, index) {
                    return <li key={index}>{event}</li>;
                })}
            </ul>
        </div>
    );
};

const App = () => {
    const [value, setValue] = React.useState(null);
    const [filter, setFilter] = React.useState<FilterDescriptor>();

    const [state, setState] = React.useState<{ events: string[] }>({ events: [] });

    const logEvent = (event: string, arg: string) => {
        const events: string[] = [...state.events];
        events.unshift(`${event} ${arg || ''}`);

        setState({ events: events });
    };

    const handleOnOpen = () => {
        logEvent('open', '');
    };
    const handleOnClose = () => {
        logEvent('close', '');
    };
    const handleOnFocus = () => {
        logEvent('focus', '');
    };
    const handleOnBlur = () => {
        logEvent('blur', '');
    };

    const handleOnChange = (event: ComboBoxChangeEvent) => {
        setValue(event.target.value);
        logEvent('change', event.target.value.name);
    };

    const handleOnFilterChange = (event: ComboBoxFilterChangeEvent) => {
        setFilter(event.filter);
        logEvent('filterChange', event.filter.value);
    };

    return (
        <div>
            <div>Employees:</div>
            <MultiColumnComboBox
                data={filter ? filterBy(employees, filter) : employees}
                value={value}
                columns={columns}
                textField={'name'}
                filterable={true}
                onOpen={handleOnOpen}
                onClose={handleOnClose}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onChange={handleOnChange}
                onFilterChange={handleOnFilterChange}
                style={{ width: '300px' }}
                placeholder="Please select ..."
            />
            <br />
            <br />
            <EventsLogger events={state.events} />
        </div>
    );
};

export default App;
