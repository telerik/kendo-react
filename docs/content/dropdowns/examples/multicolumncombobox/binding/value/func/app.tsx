import * as React from 'react';

import { MultiColumnComboBox, ComboBoxChangeEvent } from '@progress/kendo-react-dropdowns';
import { employees } from './shared-dd-data';

const columns = [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name', width: '300px' },
    { field: 'position', header: 'Position', width: '300px' }
];

const App = () => {
    const [value, setValue] = React.useState(null);

    const handleChange = (event: ComboBoxChangeEvent) => {
        if (event) {
            setValue(event.target.value);
        }
    };

    return (
        <div>
            <div>Employees:</div>
            <MultiColumnComboBox
                data={employees}
                value={value}
                columns={columns}
                textField={'name'}
                onChange={handleChange}
                style={{ width: '300px' }}
                placeholder="Please select ..."
            />
        </div>
    );
};

export default App;
