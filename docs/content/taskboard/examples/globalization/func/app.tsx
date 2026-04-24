import * as React from 'react';

import {
    TaskBoard,
    TaskBoardToolbar,
    TaskBoardChangeEvent,
    TaskBoardColumnModel,
    TaskBoardTaskModel,
    TaskBoardPriority
} from '@progress/kendo-react-taskboard';
import {
    CompositeFilterDescriptor,
    filterBy
} from '@progress/kendo-data-query';
import { cards } from './cards';

import { loadMessages, LocalizationProvider } from '@progress/kendo-react-intl';

import esMessages from './es.json';

loadMessages(esMessages, 'es');

const tasks: TaskBoardTaskModel[] = cards.map((c) => ({
    id: c.id,
    title: c.title,
    description: c.description,
    status: c.status,
    priority: c.priority
}));

const columns: TaskBoardColumnModel[] = [
    { id: 1, title: 'To-Do', status: 'todo' },
    { id: 2, title: 'In Progress', status: 'inProgress' },
    { id: 3, title: 'Done', status: 'done' }
];

const priorities: TaskBoardPriority[] = [
    { priority: 'Low Priority', color: 'green' },
    { priority: 'High Priority', color: 'blue' },
    { priority: 'Urgent', color: 'orange' }
];

const App = () => {
    const [taskData, setTaskData] = React.useState<TaskBoardTaskModel[]>(tasks);
    const [columnsData, setColumnsData] = React.useState<TaskBoardColumnModel[]>(columns);

    const onChangeHandler = React.useCallback((event: TaskBoardChangeEvent) => {
        if (event.type === 'column') {
            setColumnsData(event.data as TaskBoardColumnModel[]);
        } else {
            // New Task has been added.
            if (event.item && event.item.id === undefined) {
                event.item.id = event.data.length + 1;
            }
            setTaskData(event.data as TaskBoardTaskModel[]);
        }
    }, []);

    return (
    <LocalizationProvider language="es">
      <TaskBoard
        columnData={columnsData}
        taskData={taskData}
        priorities={priorities}
        onChange={onChangeHandler}
        style={{ height: '700px' }}
        tabIndex={0}
      />
    </LocalizationProvider>
    );
};

export default App;
