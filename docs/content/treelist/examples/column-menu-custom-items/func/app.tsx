import * as React from 'react';

import { TreeList, orderBy, TreeListSortChangeEvent, TreeListColumnProps } from '@progress/kendo-react-treelist';
import { ColumnMenuContext } from './ColumnMenuContext';
import { initialColumns } from './columns';
import { employees, expandField, subItemsField } from './employees';
import { Employee } from './shared-tl-interfaces';
import { SortDescriptor } from '@progress/kendo-data-query';

const App = () => {
    const [sort, setSort] = React.useState<SortDescriptor[]>([]);
    const [data, setData] = React.useState<Employee[]>(employees);
    const [columns, setColumns] = React.useState<TreeListColumnProps[]>(initialColumns);
    const [visibleColumns, setVisibleColumns] = React.useState<(string | boolean)[]>(
        columns.map((c) => c.field || false)
    );

    const onLock = React.useCallback(
        ({ field, locked, closeMenu }) => {
            const index = columns.findIndex((c) => c.field === field);
            const column = columns[index];
            if (column) {
                const newColumns = [...columns];
                newColumns.splice(index, 1, { ...column, locked: !locked });
                setColumns(newColumns);
                closeMenu();
            }
        },
        [columns]
    );

    const onColumnToggle = React.useCallback(({ visible }) => {
        setVisibleColumns(visible);
    }, []);

    const onSortChange = React.useCallback(
        (event: TreeListSortChangeEvent) => {
            setSort(event.sort);
            setData(orderBy(data, event.sort, subItemsField));
        },
        [data]
    );

    return (
        <ColumnMenuContext.Provider
            value={{
                onLock,
                onColumnToggle,
                columns,
                visibleColumns
            }}
        >
            <TreeList
                data={data}
                expandField={expandField}
                subItemsField={subItemsField}
                columns={columns.filter((c) => visibleColumns.includes(c.field as any))}
                sortable={{ mode: 'multiple' }}
                sort={sort}
                onSortChange={onSortChange}
            />
        </ColumnMenuContext.Provider>
    );
};

export default App;
