import * as React from 'react';

import { TimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const steps = {
        hour: 2,
        minute: 15,
        second: 30
    };
    const defaultValue = new Date(2000, 2, 10, 10, 30);

    return (
        <div className="example-wrapper">
            <p>Select a time:</p>
            <TimePicker format="HH:mm:ss" steps={steps} defaultValue={defaultValue} />
            <p>(↑ to increment and ↓ to decrement the value)</p>
        </div>
    );
};
export default App;
