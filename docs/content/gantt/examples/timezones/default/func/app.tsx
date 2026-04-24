import * as React from 'react';

import {
    Gantt,
    GanttWeekView,
    GanttMonthView,
    mapTree,
    extendDataItem,
    GanttExpandChangeEvent
} from '@progress/kendo-react-gantt';

import { getter } from '@progress/kendo-react-common';
import { exampleTaskData, exampleDependencyData } from './shared-gt-data';

const ganttStyle = {
    height: 500,
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
    children: 'children'
};

const dependencyModelFields = {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId',
    type: 'type'
};

const getTaskId = getter(taskModelFields.id);

const columns = [
    { field: taskModelFields.id, title: 'ID', width: 70 },
    { field: taskModelFields.title, title: 'Title', width: 200, expandable: true },
    { field: taskModelFields.start, title: 'Start', width: 120, format: '{0:MM/dd/yyyy}' },
    { field: taskModelFields.end, title: 'End', width: 120, format: '{0:MM/dd/yyyy}' }
];

const App = () => {
    const [taskData] = React.useState(exampleTaskData);
    const [dependencyData] = React.useState(exampleDependencyData);

    const [expandedState, setExpandedState] = React.useState([7, 11, 12, 13]);

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
        return mapTree(taskData, taskModelFields.children, (task) =>
            extendDataItem(task, taskModelFields.children, {
                [taskModelFields.isExpanded]: expandedState.includes(getTaskId(task))
            })
        );
    }, [taskData, expandedState]);

    return (
        <div>
            <Gantt
                style={ganttStyle}
                taskData={processedData}
                taskModelFields={taskModelFields}
                dependencyData={dependencyData}
                dependencyModelFields={dependencyModelFields}
                columns={columns}
                onExpandChange={onExpandChange}
            >
                <GanttWeekView />
                <GanttMonthView />
            </Gantt>
        </div>
    );
};

export default App;
