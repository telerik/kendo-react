import * as React from 'react';

import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { filterBy } from '@progress/kendo-data-query';
import { employees } from './shared-dd-data';

const columns = [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name', width: '300px' }
];

const App = () => {
    const [data, setData] = React.useState(employees);
    const [value, setValue] = React.useState<string | null>(null);
    const [filter, setFilter] = React.useState<string>('');
    const [mobileFilter, setMobileFilter] = React.useState<string>('');

    const filterData = (f: any) => filterBy(employees, f);

    const filterChange = (event: any) => {
        if (event.mobileMode) {
            setMobileFilter(event.filter.value);
        } else {
            setFilter(event.filter.value);
        }

        setData(filterData(event.filter));
    };

    const handleChange = (event: any) => {
        if (event.value) {
            setValue(event.value);
            setFilter(event.value.name);
        } else {
            setValue(null);
            setFilter('');
        }
    };

    const handleClose = () => {
        setMobileFilter('');
    };

    return (
        <div className="app-wrapper">
            <MultiColumnComboBox
                data={data}
                value={value}
                columns={columns}
                textField={'name'}
                filterable={true}
                filter={filter}
                label="Select an employee"
                placeholder="Please select..."
                adaptive={true}
                adaptiveFilter={mobileFilter}
                style={{ width: '300px' }}
                onChange={handleChange}
                onClose={handleClose}
                onFilterChange={filterChange}
            />
        </div>
    );
};

export default App;
