import * as React from 'react';

import { Checkbox, CheckboxChangeEvent } from '@progress/kendo-react-inputs';

import './styles.css';

const App = () => {
    const [taskCompleted, setTaskCompleted] = React.useState<boolean>(false);

    const handleCheckboxChange = (event: CheckboxChangeEvent) => {
        setTaskCompleted(event.value as boolean);
    };

    return (
        <div className="task-container">
            <h3>Task Completion Tracker</h3>
            <br />
            <p>
                Use the button below to toggle the task status, or manually mark the task as complete or incomplete
                using the checkbox.
            </p>
            <div className="task-controls">
                <Checkbox
                    value={taskCompleted}
                    onChange={handleCheckboxChange}
                    label={taskCompleted ? 'Task Completed' : 'Task Incomplete'}
                />
            </div>
            <br />
            <div>
                <p>{taskCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}</p>
            </div>
        </div>
    );
};

export default App;
