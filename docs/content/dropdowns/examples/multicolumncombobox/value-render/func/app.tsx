import * as React from 'react';

import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { employees } from './shared-dd-data';

const columns = [
    { field: 'id', header: 'ID', width: '100px' },
    { field: 'name', header: 'Name', width: '300px' },
    { field: 'position', header: 'Position', width: '300px' }
];

const valueRender = (element) => {
    if (!element.props.value) {
        return element;
    }
    return <span style={{ color: 'red', width: '100%' }}>{element}</span>;
};

const App = () => {
    return (
        <div>
            <div>Employees:</div>
            <MultiColumnComboBox
                data={employees}
                columns={columns}
                textField={'name'}
                style={{ width: '300px' }}
                placeholder="Please select ..."
                valueRender={valueRender}
            />
        </div>
    );
};

export default App;
