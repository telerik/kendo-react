import * as React from 'react';

import { DatePicker, DatePickerChangeEvent } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    const min = new Date(2025, 0, 1);
    const max = new Date(2030, 11, 31);

    const changeDate = (event: DatePickerChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <div className="example-config">
                Only values between <i>{min.toLocaleDateString()}</i> and <i>{max.toLocaleDateString()}</i> are valid
            </div>
            <Label editorId="date">Select date</Label>
            <DatePicker id="date" value={value} min={min} max={max} onChange={changeDate} />
        </div>
    );
};

export default App;
