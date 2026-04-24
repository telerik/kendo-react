import * as React from 'react';

import { ComboBoxPageChangeEvent, MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { orderBy } from '@progress/kendo-data-query';
import { employees } from './shared-dd-data';

const pageSize = 14;
const columns = [
    { uniqueKey: 'name', field: 'name', header: 'Name', width: 100 },
    { uniqueKey: 'position', field: 'position', header: 'Position', width: 300 },
    { uniqueKey: 'phone', field: 'phone', header: 'Phone', width: 300 }
];

const App = () => {
    const allData = orderBy(employees, [{ field: 'position', dir: 'asc' }]);

    const [state, setState] = React.useState({
        virtualData: allData.slice(0, pageSize),
        skip: 0,
        take: pageSize
    });

    const onPageChange = (event: ComboBoxPageChangeEvent) => {
        const skip = event.page.skip;
        const take = event.page.take;
        const data = allData.slice(skip, skip + take);

        const newState = {
            ...state,
            virtualData: data,
            skip: skip
        };

        setState(newState);
    };

    const virtualComboSettings = {
        data: state.virtualData,
        virtual: {
            skip: state.skip,
            pageSize: pageSize,
            total: allData.length
        },
        onPageChange: onPageChange
    };

    return (
        <div>
            <div>Employees:</div>
            <MultiColumnComboBox
                {...virtualComboSettings}
                textField={'name'}
                columns={columns}
                style={{ width: '300px' }}
                placeholder="Please select ..."
            />
        </div>
    );
};

export default App;
