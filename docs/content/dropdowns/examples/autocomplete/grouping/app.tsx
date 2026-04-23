import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { groupBy } from '@progress/kendo-data-query';
import { Label } from '@progress/kendo-react-labels';
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
            <Label editorId="employee">Select employee</Label>
            <br />
            <AutoComplete
                id="employee"
                data={groupedData}
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
