import * as React from 'react';

import { MultiSelect } from '@progress/kendo-react-dropdowns';
import { groupBy, filterBy } from '@progress/kendo-data-query';

import employees from './data';

const App = () => {
    const ungrouped = 'Ungrouped';
    const employeesWithUngrouped = employees.map((el) => (el.position ? el : { ...el, position: ungrouped }));

    const [groupedData, setGroupeData] = React.useState(
        (groupBy(employeesWithUngrouped, [{ field: 'position' }]) as any[]).reduce(
            (res, group) => [...res, ...group.items],
            []
        )
    );

    const onFilterChange = (event) => {
        const filter = event.filter;
        const data = groupBy(filterBy(employeesWithUngrouped, filter), [{ field: 'position' }])
            .map((el) => (el.position ? el : { ...el, position: ungrouped }))
            .reduce((res, group) => [...res, ...group.items], []);

        setGroupeData(data);
    };

    return (
        <div>
            <MultiSelect
                data={groupedData}
                textField="name"
                groupField="position"
                label="Select employee"
                filterable={true}
                onFilterChange={onFilterChange}
                style={{
                    width: '300px'
                }}
            />
        </div>
    );
};

export default App;
