import React, { useCallback, useMemo, useState } from 'react';
import {
    TreeList,
    filterBy,
    orderBy,
    extendDataItem,
    mapTree,
    TreeListExpandChangeEvent,
    TreeListSortChangeEvent,
    TreeListColumnMenuFilterChangeEvent
} from '@progress/kendo-react-treelist';
import { ColumnMenuCustomDateColumn } from './dateColumnMenu';
import employees from './shared-kb-treeListData';

const subItemsField = 'employees';
const expandField = 'expanded';

const columns = [
    { field: 'name', title: 'Name', width: 320, expandable: true },
    { field: 'hireDate', title: 'Hire Date', width: 280, format: '{0:d}', columnMenu: ColumnMenuCustomDateColumn },
    { field: 'timeInPosition', title: 'Year(s) in Position', width: 280 },
    { field: 'fullTime', title: 'Full Time', width: 190 }
];

const App = () => {
    const [data] = useState([...employees]);
    const [filter, setFilter] = useState<any>([]);
    const [sort, setSort] = useState<any>([]);
    const [expanded, setExpanded] = useState<number[]>([1, 2, 32]);

    const onExpandChange = useCallback((e: TreeListExpandChangeEvent) => {
        setExpanded((prev) => (e.value ? prev.filter((id) => id !== e.dataItem.id) : [...prev, e.dataItem.id]));
    }, []);

    const onSortChange = useCallback((event: TreeListSortChangeEvent) => {
        setSort(event.sort);
    }, []);

    const handleFilterChange = useCallback((event: TreeListColumnMenuFilterChangeEvent) => {
        setFilter(event.filter);
    }, []);

    const addExpandField = useCallback(
        (dataTree: any[]) =>
            mapTree(dataTree, subItemsField, (item: any) =>
                extendDataItem(item, subItemsField, { [expandField]: expanded.includes(item.id) })
            ),
        [expanded]
    );

    const processedData = useMemo(() => {
        const dataTree = orderBy(filterBy(data, filter, subItemsField), sort, subItemsField);
        return addExpandField(dataTree);
    }, [data, filter, sort, addExpandField]);

    return (
        <TreeList
            style={{ maxHeight: '590px', overflow: 'auto' }}
            expandField={expandField}
            subItemsField={subItemsField}
            onExpandChange={onExpandChange}
            data={processedData}
            columns={columns}
            columnMenuFilter={filter}
            onColumnMenuFilterChange={handleFilterChange}
            onSortChange={onSortChange}
            sort={sort}
        />
    );
};

export default App;
