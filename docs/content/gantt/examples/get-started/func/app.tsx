import * as React from 'react';
import {
    Gantt,
    GanttWeekView,
    GanttMonthView,
    GanttDayView,
    GanttTextFilter,
    GanttTaskModelFields,
    GanttDependencyModelFields
} from '@progress/kendo-react-gantt';
import { simpleDependencies, simpleTasks } from './shared-gt-simpleData';
const ganttStyle = {
    height: 500,
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
    children: 'subtasks'
};
const dependencyModelFields: GanttDependencyModelFields = {
    id: 'id',
    fromId: 'fromId',
    toId: 'toId',
    type: 'type'
};
const columns = [
    {
        field: taskModelFields.id,
        title: 'id',
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
        format: '{0:MM/dd/yyyy}'
    },
    {
        field: taskModelFields.end,
        title: 'End',
        width: 120,
        format: '{0:MM/dd/yyyy}'
    }
];

const App = () => {
    const [taskData] = React.useState(simpleTasks);
    const [dependencyData] = React.useState(simpleDependencies);

    return (
        <div>
            <Gantt
                style={ganttStyle}
                taskData={taskData}
                taskModelFields={taskModelFields}
                dependencyData={dependencyData}
                dependencyModelFields={dependencyModelFields}
                columns={columns}
            >
                <GanttDayView />
                <GanttWeekView />
                <GanttMonthView />
            </Gantt>
        </div>
    );
};

export default App;
