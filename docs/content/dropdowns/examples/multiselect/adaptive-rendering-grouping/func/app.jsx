import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { groupBy } from '@progress/kendo-data-query';
import employees from './data';

const App = () => {
    const groupedData = groupBy(employees, [{ field: 'position' }]).reduce(
        (res, group) => [...res, ...group.items],
        []
    );

    return (
        <div>
            <MultiSelect
                data={groupedData}
                textField="name"
                groupField="position"
                label="Select employees"
                placeholder="Please select..."
                adaptive={true}
                style={{ width: '300px' }}
            />
        </div>
    );
};

export default App;
