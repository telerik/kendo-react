import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const today = new Date();
    const minTime = new Date(today.getFullYear(), 2, 10, 8, 30);
    const maxTime = new Date(today.getFullYear(), 3, 10, 17, 30);
    const defaultValue = new Date(today.getFullYear(), 2, 10, 12, 45);

    return (
        <div>
            <div className="example-config">
                Only values between <i>{minTime.toLocaleTimeString()}</i> and <i>{maxTime.toLocaleTimeString()}</i> are
                valid
            </div>
            <Label editorId="date">Select date</Label>
            <DateTimePicker id="date" minTime={minTime} maxTime={maxTime} defaultValue={defaultValue} />
        </div>
    );
};
export default App;
