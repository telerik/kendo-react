import * as React from 'react';

import { MultiColumnComboBox } from '@progress/kendo-react-dropdowns';
import { groupBy } from '@progress/kendo-data-query';
import { employees } from './data';

const App = () => {
    const columns = [
        { field: 'id', header: 'ID', width: '90px' },
        { field: 'name', header: 'Name', width: '150px' },
        { field: 'position', header: 'Position', width: '480px' }
    ];
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
            <MultiColumnComboBox
                data={groupedData}
                columns={columns}
                textField="name"
                groupField="position"
                placeholder="Please select ..."
                style={{
                    width: '300px'
                }}
            />
        </div>
    );
};

export default App;
