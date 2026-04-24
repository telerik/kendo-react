import * as React from 'react';

import {
    MultiColumnComboBox,
    ComboBoxFilterChangeEvent,
    MultiColumnComboBoxColumn
} from '@progress/kendo-react-dropdowns';
import { filterBy, FilterDescriptor } from '@progress/kendo-data-query';
import { employees } from './employees';

const columns: MultiColumnComboBoxColumn[] = [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name', width: '300px' },
    { field: 'position', header: 'Position', width: '300px' }
];

const App = () => {
    const [filter, setFilter] = React.useState<FilterDescriptor>();

    const handleFilterChange = (event: ComboBoxFilterChangeEvent) => {
        if (event) {
            setFilter({ ...event.filter, field: 'position' });
        }
    };

    return (
        <div>
            <div>Employees:</div>
            <MultiColumnComboBox
                data={filter ? filterBy(employees, filter) : employees}
                columns={columns}
                textField={'name'}
                filterable={true}
                onFilterChange={handleFilterChange}
                style={{ width: '300px' }}
                placeholder="Please select ..."
            />
        </div>
    );
};

export default App;
