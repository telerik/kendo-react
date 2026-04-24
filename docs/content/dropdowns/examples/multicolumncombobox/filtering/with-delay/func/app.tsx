import * as React from 'react';

import { ComboBoxFilterChangeEvent, MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import { employees } from './shared-dd-data';

const columns = [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name', width: '300px' },
    { field: 'position', header: 'Position', width: '300px' }
];

const delay = 500;

const App = () => {
    const [data, setData] = React.useState(employees);
    const [loading, setLoading] = React.useState(false);
    const timeout = React.useRef<any>(undefined);

    const filterData = (filter: FilterDescriptor) => {
        const localData = employees.slice();
        return filterBy(localData, filter);
    };

    const handleFilterChange = (event: ComboBoxFilterChangeEvent) => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
            setData(filterData(event.filter));
            setLoading(false);
        }, delay);

        setLoading(true);
    };

    return (
        <div>
            <div>Employees:</div>
            <MultiColumnComboBox
                style={{ width: '300px' }}
                data={data}
                columns={columns}
                textField={'name'}
                filterable={true}
                onFilterChange={handleFilterChange}
                loading={loading}
                placeholder="Please select ..."
            />
        </div>
    );
};

export default App;
