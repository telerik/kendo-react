import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Hint, Label } from '@progress/kendo-react-labels';

const App = () => {
    const steps = {
        day: 2,
        month: 1,
        year: 1,
        hour: 2,
        minute: 15,
        second: 30
    };
    const defaultValue = new Date();

    return (
        <div className="example-wrapper">
            <Label editorId="date">Select date and time</Label>
            <DateTimePicker
                id="date"
                format="dd:MM:yyyy hh:mm:ss"
                steps={steps}
                defaultValue={defaultValue}
                ariaDescribedBy="hintDate"
            />
            <Hint id="dateHint">(↑ to increment and ↓ to decrement the value)</Hint>
        </div>
    );
};
export default App;
