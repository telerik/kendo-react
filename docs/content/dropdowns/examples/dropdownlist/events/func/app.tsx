import * as React from 'react';
import {
    DropDownList,
    DropDownListBlurEvent,
    DropDownListChangeEvent,
    DropDownListCloseEvent,
    DropDownListFilterChangeEvent,
    DropDownListFocusEvent,
    DropDownListOpenEvent
} from '@progress/kendo-react-dropdowns';
import { useAsyncFocusBlur } from '@progress/kendo-react-common';
import { CompositeFilterDescriptor, filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import countries from './countries';
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
    const [data, setData] = React.useState(countries.slice());
    const [value, setValue] = React.useState('');
    const [events, setEvents] = React.useState(logs);

    const onChange = (event: DropDownListChangeEvent) => {
        logs.unshift('change: ' + event.value);
        setValue(event.value);
        setEvents(logs.slice());
    };
    const handleBlur = (event: DropDownListBlurEvent) => {
        logs.unshift('blur');
        setEvents(logs.slice());
    };
    const handleFocus = (event: DropDownListFocusEvent) => {
        logs.unshift('focus');
        setEvents(logs.slice());
    };
    const onClose = (event: DropDownListCloseEvent) => {
        logs.unshift('close');
        setEvents(logs.slice());
    };
    const onOpen = (event: DropDownListOpenEvent) => {
        logs.unshift('open');
        setEvents(logs.slice());
    };
    const filterData = (filter: FilterDescriptor | CompositeFilterDescriptor) => {
        const data = countries.slice();
        return filterBy(data, filter);
    };
    const onFilterChange = (event: DropDownListFilterChangeEvent) => {
        logs.unshift('filter: ' + event.filter.value);
        setEvents(logs.slice());
        setData(filterData(event.filter));
    };

    const { onFocus, onBlur } = useAsyncFocusBlur({
        onFocus: handleFocus,
        onBlur: handleBlur
    });
    return (
        <div className="row">
            <div className="col-sm-6">
                <DropDownList
                    data={data}
                    onOpen={onOpen}
                    onClose={onClose}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    onFilterChange={onFilterChange}
                    filterable={true}
                    value={value}
                    label="Select country"
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
