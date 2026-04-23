import * as React from 'react';
import { TaskBoard } from '@progress/kendo-react-taskboard';
import { Column } from './column';
import { Card } from './card';
import { cards } from './cards';

const tasks = cards.map((c) => ({
    id: c.id,
    title: c.title,
    description: c.description,
    status: c.status,
    priority: c.priority
}));
const columns = [
    {
        id: 1,
        title: 'To-Do',
        status: 'todo'
    },
    {
        id: 2,
        title: 'In Progress',
        status: 'inProgress'
    },
    {
        id: 3,
        title: 'Done',
        status: 'done'
    }
];
const priorities = [
    {
        priority: 'Low Priority',
        color: 'green'
    },
    {
        priority: 'High Priority',
        color: 'blue'
    },
    {
        priority: 'Urgent',
        color: 'orange'
    }
];

const App = () => {
    const [taskData, setTaskData] = React.useState(tasks);
    const [columnsData, setColumnsData] = React.useState(columns);

    const onChangeHandler = React.useCallback((event) => {
        if (event.type === 'column') {
            setColumnsData(event.data);
        } else {
            // New Task has been added.
            if (event.item && event.item.id === undefined) {
                event.item.id = event.data.length + 1;
            }

            setTaskData(event.data);
        }
    }, []);

    return (
    <TaskBoard
      columnData={columnsData}
      taskData={taskData}
      priorities={priorities}
      onChange={onChangeHandler}
      column={Column}
      card={Card}
      style={{
        height: '700px'
      }}
      tabIndex={0}
    />
    );
};

export default App;
