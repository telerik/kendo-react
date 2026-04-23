import * as React from 'react';

import { DropDownList } from '@progress/kendo-react-dropdowns';
import { groupBy } from '@progress/kendo-data-query';
import employees from './data';

const App = () => {
    const ungrouped = 'Ungrouped';
    const employeesWithUngrouped = employees.map((el) => (el.position ? el : { ...el, position: ungrouped }));
    const [opened, setOpened] = React.useState(true);
    const [groupedData] = React.useState(
        (groupBy(employeesWithUngrouped, [{ field: 'position' }]) as any[]).reduce(
            (res, group) => [...res, ...group.items],
            []
        )
    );

    return (
        <div>
            <DropDownList
                data={groupedData}
                textField="name"
                groupField="position"
                style={{
                    width: '300px'
                }}
                opened={opened}
                onOpen={() => setOpened(true)}
                onClose={() => setOpened(false)}
                label="Select employee"
            />
        </div>
    );
};

export default App;
