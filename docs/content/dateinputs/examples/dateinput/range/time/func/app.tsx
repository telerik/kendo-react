import * as React from 'react';

import { DateInput, DateInputChangeEvent } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    const minTime = new Date(2025, 2, 10, 8, 30);
    const maxTime = new Date(2025, 2, 10, 17, 30);

    const changeDate = (event: DateInputChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <div className="example-config">
                Only values between <i>{minTime.toLocaleTimeString()}</i> and <i>{maxTime.toLocaleTimeString()}</i> are
                valid
            </div>
            <Label editorId="time">Select time</Label>
            <DateInput
                id="time"
                format={'HH:mm'}
                value={value}
                minTime={minTime}
                maxTime={maxTime}
                onChange={changeDate}
            />
        </div>
    );
};

export default App;
