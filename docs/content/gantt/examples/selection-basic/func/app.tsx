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
    GanttDataStateChangeEvent,
    GanttExpandChangeEvent,
    GanttTaskClickEvent,
    getSelectedState,
    getSelectedStateFromKeyDown,
    GanttSelectionChangeEvent,
    GanttKeyDownEvent,
    GanttSelectableMode,
    GanttColumnProps
} from '@progress/kendo-react-gantt';
import { Checkbox, CheckboxChangeEvent, RadioGroup, RadioGroupChangeEvent } from '@progress/kendo-react-inputs';

import { getter } from '@progress/kendo-react-common';
import { exampleTaskData, exampleDependencyData } from './shared-gt-data';

interface selectionModesType {
    value: GanttSelectableMode | undefined;
    label: string;
}

const ganttStyle = {
    height: 740,
    width: '100%'
};

const taskModelFields = {
    id: 'id',
    start: 'start',
    end: 'end',
    title: 'title',
    percentComplete: 'percentComplete',
    isRollup: 'isRollup',
    isExpanded: 'isExpanded',
    isInEdit: 'isInEdit',
    children: 'children',
    isSelected: 'isSelected'
};

const dependencyModelFields = {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId',
    type: 'type'
};

const getTaskId = getter(taskModelFields.id);

const columns: GanttColumnProps[] = [
    { field: taskModelFields.id, title: 'ID', width: 70 },
    { field: taskModelFields.title, title: 'Title', width: 200, expandable: true },
    { field: taskModelFields.start, title: 'Start', width: 120, format: '{0:MM/dd/yyyy}' },
    { field: taskModelFields.end, title: 'End', width: 120, format: '{0:MM/dd/yyyy}' }
];

const selectionModes: selectionModesType[] = [
    { value: 'single', label: 'Single selection mode' },
    { value: 'multiple', label: 'Multiple selection mode' }
];

const App = () => {
    const [taskData, setTaskData] = React.useState(exampleTaskData);
    const [dependencyData, setDependencyData] = React.useState(exampleDependencyData);

    const [expandedState, setExpandedState] = React.useState({ 7: true, 11: true, 12: true, 13: true });
    const [selectedState, setSelectedState] = React.useState({});

    const [dragEnabled, setDragEnabled] = React.useState<boolean>(true);
    const [cellEnabled, setCellEnabled] = React.useState<boolean>(true);
    const [selectionMode, setSelectionMode] = React.useState<GanttSelectableMode>(selectionModes[1].value!);

    const [dataState, setDataState] = React.useState<any>({
        sort: [],
        filter: []
    });

    const onDataStateChange = React.useCallback(
        (event: GanttDataStateChangeEvent) => setDataState(event.dataState),
        [setDataState]
    );

    const onExpandChange = React.useCallback(
        (event: GanttExpandChangeEvent) => {
            setExpandedState({ ...expandedState, [getTaskId(event.dataItem)]: !event.value });
        },
        [expandedState, setExpandedState]
    );

    const onTaskClick = React.useCallback(
        (event: GanttTaskClickEvent) => {
            const taskId = getTaskId(event.dataItem);
            setSelectedState({ [taskId]: !selectedState[taskId] });
        },
        [setSelectedState, selectedState]
    );

    const onSelectionChange = React.useCallback(
        (event: GanttSelectionChangeEvent) => {
            const newSelectedState = getSelectedState({
                event,
                selectedState,
                dataItemKey: taskModelFields.id
            });

            setSelectedState(newSelectedState);
        },
        [selectedState]
    );

    const onKeyDown = React.useCallback(
        (event: GanttKeyDownEvent) => {
            const newSelectedState = getSelectedStateFromKeyDown({
                event,
                selectedState: selectedState,
                dataItemKey: taskModelFields.id
            });

            setSelectedState(newSelectedState);
        },
        [selectedState]
    );

    const onDragChange = (event: CheckboxChangeEvent) => {
        setDragEnabled(event.value);
    };

    const onCellChange = (event: CheckboxChangeEvent) => {
        setCellEnabled(event.value);
    };

    const onSelectionModeChange = (event: RadioGroupChangeEvent) => {
        setSelectionMode(event.value);
    };

    const processedData = React.useMemo(() => {
        const filteredData = filterBy(taskData, dataState.filter, taskModelFields.children);
        const sortedData = orderBy(filteredData, dataState.sort, taskModelFields.children);

        return mapTree(sortedData, taskModelFields.children, (task) =>
            extendDataItem(task, taskModelFields.children, {
                [taskModelFields.isExpanded]: expandedState[getTaskId(task)],
                [taskModelFields.isSelected]: selectedState[getTaskId(task)]
            })
        );
    }, [taskData, dataState, expandedState, selectedState]);

    return (
        <div>
            <Checkbox value={dragEnabled} label={'Enable drag selection'} onChange={onDragChange} />
            <Checkbox value={cellEnabled} label={'Enable cell selection'} onChange={onCellChange} />
            <RadioGroup value={selectionMode} onChange={onSelectionModeChange} data={selectionModes} />
            <Gantt
                style={ganttStyle}
                taskData={processedData}
                taskModelFields={taskModelFields}
                dependencyData={dependencyData}
                dependencyModelFields={dependencyModelFields}
                columns={columns}
                reorderable={true}
                sortable={true}
                sort={dataState.sort}
                filter={dataState.filter}
                navigatable={true}
                onExpandChange={onExpandChange}
                onDataStateChange={onDataStateChange}
                toolbar={{ addTaskButton: true }}
                selectable={{
                    enabled: true,
                    drag: dragEnabled,
                    cell: cellEnabled,
                    mode: selectionMode
                }}
                onTaskClick={onTaskClick}
                onSelectionChange={onSelectionChange}
                onKeyDown={onKeyDown}
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
