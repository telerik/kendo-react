import React from 'react';
import { TimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const min = new Date(2000, 2, 10, 2, 30);
    const max = new Date(2010, 2, 10, 22, 15);
    const defaultValue = new Date(2010, 2, 10, 10, 0);

    return (
        <div>
            <div className="example-config">
                <p>Select a time:</p>
                <TimePicker min={min} max={max} defaultValue={defaultValue}></TimePicker>
            </div>
        </div>
    );
};

export default App;
