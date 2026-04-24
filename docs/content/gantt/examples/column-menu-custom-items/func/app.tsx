import * as React from 'react';

import {
    Gantt,
    GanttWeekView,
    GanttMonthView,
    GanttDayView,
    GanttYearView,
    filterBy,
    orderBy,
    mapTree,
    extendDataItem,
    GanttDependencyModelFields,
    GanttColumnProps,
    GanttSortChangeEvent,
    GanttColumnMenuFilterChangeEvent,
    GanttExpandChangeEvent,
    GanttColumnReorderEvent,
    GanttColumnResizeEvent
} from '@progress/kendo-react-gantt';

import { ColumnMenuContext } from './ColumnMenuContext';
import { initialColumns, taskModelFields } from './columns';

import { getter } from '@progress/kendo-react-common';
import { exampleTaskData, exampleDependencyData } from './shared-gt-data';
import { CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';

const ganttStyle = {
    height: 500,
    width: '100%'
};

const dependencyModelFields: GanttDependencyModelFields = {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId',
    type: 'type'
};

const getTaskId = getter(taskModelFields.id!);

const App = () => {
    const [taskData] = React.useState<any[]>(exampleTaskData);
    const [dependencyData] = React.useState<any[]>(exampleDependencyData);

    const [expandedState, setExpandedState] = React.useState<number[]>([7, 11, 12, 13]);
    const [columnsState, setColumnsState] = React.useState<GanttColumnProps[]>(initialColumns);
    const [visibleColumnsState, setVisibleColumnsState] = React.useState<string[]>(columnsState.map((c) => c.field!));

    const onColumnResize = React.useCallback(
        (event: GanttColumnResizeEvent) => event.end && setColumnsState(event.columns),
        [setColumnsState]
    );

    const onColumnReorder = React.useCallback(
        (event: GanttColumnReorderEvent) => setColumnsState(event.columns),
        [setColumnsState]
    );

    const [sortState, setSortState] = React.useState<SortDescriptor[]>([]);
    const [filterState, setFilterState] = React.useState<CompositeFilterDescriptor[]>([]);

    const onColumnMenuFilterChange = React.useCallback(
        (event: GanttColumnMenuFilterChangeEvent) => setFilterState(event.filter),
        [setFilterState]
    );

    const onSortChange = React.useCallback((event: GanttSortChangeEvent) => setSortState(event.sort), [setSortState]);

    const onExpandChange = React.useCallback(
        (event: GanttExpandChangeEvent) => {
            const id = getTaskId(event.dataItem);
            const newExpandedState = event.value
                ? expandedState.filter((currentId) => currentId !== id)
                : [...expandedState, id];

            setExpandedState(newExpandedState);
        },
        [expandedState, setExpandedState]
    );

    const onColumnToggle = React.useCallback((visible: string[]) => {
        setVisibleColumnsState(visible);
    }, []);

    const processedData = React.useMemo(() => {
        const filteredData = filterBy(taskData, filterState, taskModelFields.children!);
        const sortedData = orderBy(filteredData, sortState, taskModelFields.children!);

        return mapTree(sortedData, taskModelFields.children!, (task) =>
            extendDataItem(task, taskModelFields.children!, {
                [taskModelFields.isExpanded!]: expandedState.includes(getTaskId(task))
            })
        );
    }, [taskData, filterState, sortState, expandedState]);

    return (
        <ColumnMenuContext.Provider
            value={{
                onColumnToggle,
                columns: columnsState,
                visibleColumns: visibleColumnsState
            }}
        >
            <Gantt
                style={ganttStyle}
                taskData={processedData}
                taskModelFields={taskModelFields}
                dependencyData={dependencyData}
                dependencyModelFields={dependencyModelFields}
                columns={columnsState.filter((c) => visibleColumnsState.includes(c.field!))}
                resizable={true}
                reorderable={true}
                sortable={true}
                sort={sortState}
                onSortChange={onSortChange}
                columnMenuFilter={filterState}
                onColumnMenuFilterChange={onColumnMenuFilterChange}
                onColumnResize={onColumnResize}
                onColumnReorder={onColumnReorder}
                onExpandChange={onExpandChange}
            >
                <GanttWeekView />
                <GanttDayView />
                <GanttMonthView />
                <GanttYearView />
            </Gantt>
        </ColumnMenuContext.Provider>
    );
};

export default App;
