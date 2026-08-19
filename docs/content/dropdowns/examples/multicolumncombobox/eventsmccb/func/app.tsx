import * as React from 'react';
import { ComboBoxChangeEvent, ComboBoxFilterChangeEvent, MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import { EventLog } from '@docs-shared/EventLog';
import { employees } from './shared-dd-data';

const columns = [
    { field: 'id', header: 'ID', width: '200px' },
    { field: 'name', header: 'Name', width: '200px' },
    { field: 'position', header: 'Position', width: '300px' }
];

const App = () => {
    const [value, setValue] = React.useState(null);
    const [filter, setFilter] = React.useState<FilterDescriptor>();
    const [events, setEvents] = React.useState<string[]>([]);

    const log = (msg: string) => setEvents((prev) => [msg, ...prev]);

    const handleOnChange = (event: ComboBoxChangeEvent) => {
        setValue(event.target.value);
        log('change: ' + event.target.value?.name);
    };

    const handleOnFilterChange = (event: ComboBoxFilterChangeEvent) => {
        setFilter(event.filter);
        log('filterChange: ' + event.filter.value);
    };

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <div>
                <div>Employees:</div>
                <MultiColumnComboBox
                    data={filter ? filterBy(employees, filter) : employees}
                    value={value}
                    columns={columns}
                    textField={'name'}
                    filterable={true}
                    onOpen={() => log('open')}
                    onClose={() => log('close')}
                    onFocus={() => log('focus')}
                    onBlur={() => log('blur')}
                    onChange={handleOnChange}
                    onFilterChange={handleOnFilterChange}
                    style={{ width: '300px' }}
                    placeholder="Please select ..."
                />
            </div>
        </EventLog>
    );
};

export default App;
