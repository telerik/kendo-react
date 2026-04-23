import * as React from 'react';

import {
    Gantt,
    GanttWeekView,
    GanttMonthView,
    GanttDayView,
    filterBy,
    orderBy,
    mapTree,
    extendDataItem,
    GanttTextFilter,
    GanttDateFilter,
    addTask,
    GanttForm,
    updateTask,
    removeTask,
    GanttRemoveDialog,
    addDependency,
    GanttRemoveDialogStateChangeEvent,
    GanttFormStateChangeEvent,
    TaskModelFields,
    GanttDependency,
    GanttAddClickEvent,
    GanttDataStateChangeEvent,
    GanttDependencyCreateEvent,
    GanttExpandChangeEvent,
    GanttRowDoubleClickEvent,
    GanttTaskClickEvent,
    GanttTaskDoubleClickEvent,
    GanttTaskRemoveClickEvent
} from '@progress/kendo-react-gantt';

import { clone, getter, guid } from '@progress/kendo-react-common';

import { WindowProps, WindowPropsContext } from '@progress/kendo-react-dialogs';
import { exampleTaskData, exampleDependencyData } from './shared-gt-data';

const ganttStyle = {
    height: 700,
    width: '100%'
};

const taskModelFields: TaskModelFields = {
    id: 'id',
    start: 'start',
    end: 'end',
    title: 'title',
    percentComplete: 'percentComplete',
    parentId: 'parentId',
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

const columns = [
    {
        field: taskModelFields.id,
        title: 'ID',
        width: 70
    },
    {
        field: taskModelFields.title,
        title: 'Title',
        width: 200,
        expandable: true,
        filter: GanttTextFilter
    },
    {
        field: taskModelFields.start,
        title: 'Start',
        width: 120,
        format: '{0:MM/dd/yyyy}',
        filter: GanttDateFilter
    },
    {
        field: taskModelFields.end,
        title: 'End',
        width: 120,
        format: '{0:MM/dd/yyyy}',
        filter: GanttDateFilter
    }
];

const App = () => {
    const [taskData, setTaskData] = React.useState(exampleTaskData);
    const [dependencyData, setDependencyData] = React.useState<GanttDependency[]>(exampleDependencyData);

    const [expandedState, setExpandedState] = React.useState([7, 11, 12, 13]);
    const [columnsState] = React.useState<Array<any>>(columns);
    const [selectedIdState, setSelectedIdState] = React.useState(null);

    const [editItem, setEditItem] = React.useState(null);
    const [removeItem, setRemoveItem] = React.useState(null);

    const [dataState, setDataState] = React.useState<any>({
        sort: [],
        filter: []
    });

    const onDataStateChange = React.useCallback(
        (event: GanttDataStateChangeEvent) =>
            setDataState({ sort: event.dataState.sort, filter: event.dataState.filter }),
        [setDataState]
    );

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

    const onSelect = React.useCallback(
        (event: GanttTaskClickEvent) => {
            setSelectedIdState(getTaskId(event.dataItem));
        },
        [setSelectedIdState]
    );

    const onEdit = React.useCallback(
        (event: GanttTaskDoubleClickEvent | GanttRowDoubleClickEvent) => setEditItem(clone(event.dataItem)),
        [setEditItem]
    );

    const onAdd = React.useCallback(
        (event: GanttAddClickEvent) => {
            const { syntheticEvent, nativeEvent, target, ...others } = event;
            const newData = addTask({
                ...others,
                taskModelFields: taskModelFields,
                dataTree: taskData,
                defaultDataItem: {
                    [taskModelFields.title]: 'New task',
                    [taskModelFields.id]: guid(),
                    [taskModelFields.percentComplete]: 0
                }
            });

            setTaskData(newData);
        },
        [taskData]
    );

    const onRemove = React.useCallback(
        (event: GanttTaskRemoveClickEvent) => setRemoveItem(event.dataItem),
        [setRemoveItem]
    );

    const removeDeletedItemDependencies = React.useCallback(
        (item) => {
            const newDependencyData = dependencyData.filter((d) => {
                return d.fromId !== item[taskModelFields.id] && d.toId !== item[taskModelFields.id];
            });
            setDependencyData(newDependencyData);
        },
        [dependencyData]
    );

    const onRemoveConfirm = React.useCallback(
        (event: GanttRemoveDialogStateChangeEvent) => {
            const newData = removeTask({
                removedDataItem: event.dataItem,
                taskModelFields: taskModelFields,
                dataTree: taskData
            });

            setRemoveItem(null);
            setEditItem(null);
            setTaskData(newData);
            removeDeletedItemDependencies(event.dataItem);
        },
        [taskData, setTaskData, setRemoveItem, removeDeletedItemDependencies]
    );

    const onRemoveCancel = React.useCallback(() => setRemoveItem(null), [setRemoveItem]);

    const onDependecyCreate = React.useCallback(
        (event: GanttDependencyCreateEvent) => {
            const newData = addDependency({
                dependencyData,
                fromId: event.fromId,
                toId: event.toId,
                type: event.type,
                dependencyModelFields,
                defaultDataItem: { [dependencyModelFields.id]: guid() }
            });
            setDependencyData(newData);
        },
        [setDependencyData, dependencyData]
    );

    const processedData = React.useMemo(() => {
        const filteredData = filterBy(taskData, dataState.filter, taskModelFields.children);
        const sortedData = orderBy(filteredData, dataState.sort, taskModelFields.children);

        return mapTree(sortedData, taskModelFields.children, (task) =>
            extendDataItem(task, taskModelFields.children, {
                [taskModelFields.isExpanded]: expandedState.includes(getTaskId(task)),
                [taskModelFields.isSelected]: selectedIdState === getTaskId(task)
            })
        );
    }, [taskData, dataState, expandedState, selectedIdState]);

    const onFormSubmit = React.useCallback(
        (event: GanttFormStateChangeEvent) => {
            const newData = updateTask({
                updatedDataItem: event.dataItem,
                taskModelFields: taskModelFields,
                dataTree: taskData
            });

            if (
                event.dataItem.parentId !== event.initialDataItem.parentId &&
                !expandedState.includes(event.dataItem.parentId)
            ) {
                setExpandedState([...expandedState, event.dataItem.parentId]);
            }
            setEditItem(null);
            setTaskData(newData);

            if (event.dependencies && event.dependencies.createdDependencies.length) {
                const newItems = event.dependencies.createdDependencies;

                const newItemsWithId = newItems.map((item: GanttDependency) => {
                    if (item.id === null) {
                        item.id = Math.floor(Math.random() * 1000) + 100;
                    }
                    return item;
                });

                setDependencyData((prevState: GanttDependency[]) => [...prevState, ...newItemsWithId]);
            }

            if (event.dependencies && event.dependencies.updatedDependencies.length) {
                const updatedItems = event.dependencies.updatedDependencies;

                const updatedArray = [...dependencyData];

                updatedItems.forEach((dependency: GanttDependency) => {
                    const positionIndex = dependencyData.findIndex((dep: GanttDependency) => dep.id === dependency.id);

                    if (positionIndex > -1) {
                        updatedArray.splice(positionIndex, 1, dependency);
                    }
                });

                setDependencyData(updatedArray);
            }

            if (event.dependencies && event.dependencies.deletedDependencies.length) {
                const deletedItems = event.dependencies.deletedDependencies;

                const filteredDeletedItems = dependencyData.filter(
                    (item: GanttDependency) =>
                        !deletedItems.find((deletedItem: GanttDependency) => item.id === deletedItem.id)
                );

                setDependencyData(filteredDeletedItems);
            }
        },
        [taskData, dependencyData, setTaskData, setEditItem]
    );

    const onFormCancel = React.useCallback(() => setEditItem(null), [setEditItem]);

    const onFormDelete = React.useCallback(
        (event: GanttRemoveDialogStateChangeEvent) => {
            setRemoveItem(event.dataItem);
        },
        [setEditItem, onRemoveConfirm]
    );

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
                sort={dataState.sort}
                filter={dataState.filter}
                navigatable={true}
                onExpandChange={onExpandChange}
                onDataStateChange={onDataStateChange}
                toolbar={{ addTaskButton: true }}
                onAddClick={onAdd}
                onTaskClick={onSelect}
                onRowClick={onSelect}
                onTaskDoubleClick={onEdit}
                onRowDoubleClick={onEdit}
                onTaskRemoveClick={onRemove}
                onDependencyCreate={onDependecyCreate}
            >
                <GanttWeekView />
                <GanttDayView />
                <GanttMonthView />
            </Gantt>
            {editItem && (
                <WindowPropsContext.Provider
                    value={(props: WindowProps) => {
                        return { ...props };
                    }}
                >
                    <GanttForm
                        dataItem={editItem}
                        taskData={processedData}
                        dependencyData={dependencyData}
                        onSubmit={onFormSubmit}
                        onCancel={onFormCancel}
                        onDelete={onFormDelete}
                        onClose={onFormCancel}
                    />
                </WindowPropsContext.Provider>
            )}
            {removeItem && (
                <GanttRemoveDialog
                    dataItem={removeItem}
                    onConfirm={onRemoveConfirm}
                    onCancel={onRemoveCancel}
                    onClose={onRemoveCancel}
                />
            )}
        </div>
    );
};

export default App;
