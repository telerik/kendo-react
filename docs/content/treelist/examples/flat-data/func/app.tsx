import * as React from 'react';

import {
    TreeList,
    createDataTree,
    mapTree,
    extendDataItem,
    TreeListExpandChangeEvent,
    TreeListColumnProps
} from '@progress/kendo-react-treelist';
import employeesFlat from './shared-tl-flat-data';
import { Employee } from './shared-tl-interfaces';

const expandField: string = 'expanded';
const subItemsField: string = 'employees';
const dataTree: Employee[] = createDataTree(
    employeesFlat,
    (i) => i.id,
    (i) => i.reportsTo,
    subItemsField
);
const columns: TreeListColumnProps[] = [
    { field: 'name', title: 'Name', expandable: true, width: '280px' },
    { field: 'position', title: 'Position', width: '230px' },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: '150px' },
    { field: 'hireDate', title: 'Hire Date', format: '{0:d}', width: '150px' },
    { field: 'fullTime', title: 'Full Time', width: '150px' }
];

const App = () => {
    const data: Employee[] = [...dataTree];
    const [expanded, setExpanded] = React.useState<number[]>([1, 2, 32]);

    const onExpandChange = (e: TreeListExpandChangeEvent) => {
        setExpanded(e.value ? expanded.filter((id) => id !== e.dataItem.id) : [...expanded, e.dataItem.id]);
    };

    const callback = (item: Employee) =>
        expanded.includes(item.id) ? extendDataItem(item, subItemsField, { [expandField]: true }) : item;

    return (
        <TreeList
            style={{ maxHeight: '510px', overflow: 'auto' }}
            data={mapTree(data, subItemsField, callback)}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            columns={columns}
        />
    );
};

export default App;
