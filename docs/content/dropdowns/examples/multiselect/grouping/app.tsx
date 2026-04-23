import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { groupBy } from '@progress/kendo-data-query';
import employees from './data';

const App = () => {
    const ungrouped = 'Ungrouped';
    const employeesWithUngrouped = employees.map((el) => (el.position ? el : { ...el, position: ungrouped }));

    const [groupedData] = React.useState(
        (groupBy(employeesWithUngrouped, [{ field: 'position' }]) as any[]).reduce(
            (res, group) => [...res, ...group.items],
            []
        )
    );

    return (
        <div>
            <MultiSelect
                data={groupedData}
                textField="name"
                groupField="position"
                placeholder="Please select employees..."
                style={{
                    width: '300px'
                }}
            />
        </div>
    );
};

export default App;
