import React, { useCallback, useMemo, useState } from 'react';
import { TreeList, filterBy, orderBy, extendDataItem, mapTree } from '@progress/kendo-react-treelist';
import { ColumnMenuCustomCheckboxesColumn } from './checkboxFilterColumnMenu';
import employees from './data.ts';

const subItemsField = 'employees';
const expandField = 'expanded';

const App = () => {
    const [data] = useState([...employees]);
    const [filter, setFilter] = useState<any>([]);
    const [sort, setSort] = useState<any>([]);
    const [expanded, setExpanded] = useState<number[]>([1, 2, 32]);

    const names = useMemo(() => {
        const acc: string[] = [];
        mapTree(employees, subItemsField, (item: any) => acc.push(item.name));
        return acc;
    }, []);

    const ColumnMenuCustomCheckbox = useCallback(
        (props: any) => <ColumnMenuCustomCheckboxesColumn {...props} data={names} />,
        [names]
    );

    const columns = useMemo(
        () => [
            { field: 'name', title: 'Name', width: 320, expandable: true, columnMenu: ColumnMenuCustomCheckbox },
            { field: 'hireDate', title: 'Hire Date', width: 280, format: '{0:d}' },
            { field: 'timeInPosition', title: 'Year(s) in Position', width: 280 },
            { field: 'fullTime', title: 'Full Time', width: 190 }
        ],
        [ColumnMenuCustomCheckbox]
    );

    const onExpandChange = useCallback((e: any) => {
        setExpanded((prev) => (e.value ? prev.filter((id) => id !== e.dataItem.id) : [...prev, e.dataItem.id]));
    }, []);

    const onSortChange = useCallback((event: any) => {
        setSort(event.sort);
    }, []);

    const handleFilterChange = useCallback((event: any) => {
        setFilter(event.filter);
    }, []);

    const processedData = useMemo(() => {
        const tree = orderBy(filterBy(data, filter, subItemsField), sort, subItemsField);
        return mapTree(tree, subItemsField, (item: any) =>
            extendDataItem(item, subItemsField, { [expandField]: expanded.includes(item.id) })
        );
    }, [data, filter, sort, expanded]);

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
