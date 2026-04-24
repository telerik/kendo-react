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
    GanttTaskModelFields,
    GanttDependencyModelFields,
    GanttColumnProps,
    GanttColumnResizeEvent,
    GanttColumnReorderEvent,
    GanttSortChangeEvent,
    GanttColumnMenuFilterChangeEvent,
    GanttExpandChangeEvent
} from '@progress/kendo-react-gantt';

import { ColumnMenuCustomTextColumn } from './textColumnMenu';
import { ColumnMenuCustomNumericColumn } from './numericColumnMenu';
import { ColumnMenuCustomDateColumn } from './dateColumnMenu';

import { getter } from '@progress/kendo-react-common';
import { exampleTaskData, exampleDependencyData } from './shared-gt-data';
import { CompositeFilterDescriptor, SortDescriptor } from '@progress/kendo-data-query';

const ganttStyle = {
    height: 700,
    width: '100%'
};

const taskModelFields: GanttTaskModelFields = {
    id: 'id',
    start: 'start',
    end: 'end',
    title: 'title',
    percentComplete: 'percentComplete',
    isRollup: 'isRollup',
    isExpanded: 'isExpanded',
    isInEdit: 'isInEdit',
    children: 'children'
};

const dependencyModelFields: GanttDependencyModelFields = {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId',
    type: 'type'
};

const getTaskId = getter(taskModelFields.id!);

const columns: GanttColumnProps[] = [
    { field: taskModelFields.id, title: 'ID', width: 70 },
    {
        field: taskModelFields.title,
        title: 'Title',
        width: 200,
        expandable: true,
        columnMenu: ColumnMenuCustomTextColumn
    },
    {
        field: taskModelFields.start,
        title: 'Start',
        width: 120,
        format: '{0:MM/dd/yyyy}',
        columnMenu: ColumnMenuCustomDateColumn
    },
    {
        field: taskModelFields.end,
        title: 'End',
        width: 120,
        format: '{0:MM/dd/yyyy}',
        columnMenu: ColumnMenuCustomDateColumn
    },
    {
        field: taskModelFields.percentComplete,
        title: 'Percent Complete',
        width: 120,
        format: '{0:p}',
        columnMenu: ColumnMenuCustomNumericColumn
    }
];

const App = () => {
    const [taskData] = React.useState<any[]>(exampleTaskData);
    const [dependencyData] = React.useState<any[]>(exampleDependencyData);

    const [expandedState, setExpandedState] = React.useState<number[]>([7, 11, 12, 13]);
    const [columnsState, setColumnsState] = React.useState<GanttColumnProps[]>(columns);

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
        <div>
            <Gantt
                style={ganttStyle}
                taskData={processedData}
                taskModelFields={taskModelFields}
                dependencyData={dependencyData}
                dependencyModelFields={dependencyModelFields}
                columns={columnsState}
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
        </div>
    );
};

export default App;
