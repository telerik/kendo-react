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
import { EventLog } from '@docs-shared/EventLog';
import countries from './countries';

const App = () => {
    const [data, setData] = React.useState(countries.slice());
    const [value, setValue] = React.useState('');
    const [events, setEvents] = React.useState<string[]>([]);

    const log = (msg: string) => setEvents((prev) => [msg, ...prev]);

    const onChange = (event: DropDownListChangeEvent) => {
        log('change: ' + event.value);
        setValue(event.value);
    };
    const handleBlur = (event: DropDownListBlurEvent) => log('blur');
    const handleFocus = (event: DropDownListFocusEvent) => log('focus');
    const onClose = (event: DropDownListCloseEvent) => log('close');
    const onOpen = (event: DropDownListOpenEvent) => log('open');

    const filterData = (filter: FilterDescriptor | CompositeFilterDescriptor) => {
        const data = countries.slice();
        return filterBy(data, filter);
    };
    const onFilterChange = (event: DropDownListFilterChangeEvent) => {
        log('filter: ' + event.filter.value);
        setData(filterData(event.filter));
    };

    const { onFocus, onBlur } = useAsyncFocusBlur({
        onFocus: handleFocus,
        onBlur: handleBlur
    });

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
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
        </EventLog>
    );
};

export default App;
