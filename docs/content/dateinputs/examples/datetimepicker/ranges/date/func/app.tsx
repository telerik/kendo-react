import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const today = new Date();
    const min = new Date(today.getFullYear(), 2, 10, 12, 30);
    const max = new Date(today.getFullYear(), 3, 10, 12, 30);
    const defaultValue = new Date(today.getFullYear(), 2, 10, 12, 45);

    return (
        <div>
            <div className="example-config">
                Only values between <i>{min.toLocaleString()}</i> and <i>{max.toLocaleString()}</i> are valid
            </div>
            <Label editorId="date">Select date</Label>
            <DateTimePicker id="date" min={min} max={max} defaultValue={defaultValue} />
        </div>
    );
};
export default App;
