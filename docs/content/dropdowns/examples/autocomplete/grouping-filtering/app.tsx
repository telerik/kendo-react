import * as React from 'react';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { groupBy, filterBy } from '@progress/kendo-data-query';

import employees from './data';

const App = () => {
    const ungrouped = 'Ungrouped';
    const employeesWithUngrouped = employees.map((el) => (el.position ? el : { ...el, position: ungrouped }));

    const [groupedData, setGroupeData] = React.useState(
        groupBy(employeesWithUngrouped, [{ field: 'position' }])
            .map((el) => (el.position ? el : { ...el, position: ungrouped }))
            .reduce((res, group) => [...res, ...group.items], [])
    );

    const onFilterChange = (event) => {
        const filter = {
            field: 'name',
            ignoreCase: true,
            operator: 'contains',
            value: event.value
        };

        const data = groupBy(filterBy(employeesWithUngrouped, filter), [{ field: 'position' }])
            .map((el) => (el.position ? el : { ...el, position: ungrouped }))
            .reduce((res, group) => [...res, ...group.items], []);

        setGroupeData(data);
    };

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
                onChange={onFilterChange}
                style={{
                    width: '300px'
                }}
            />
        </div>
    );
};

export default App;
