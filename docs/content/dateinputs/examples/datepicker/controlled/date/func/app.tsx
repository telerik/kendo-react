import * as React from 'react';

import { DatePicker, DatePickerChangeEvent } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());

    const handleChange = (event: DatePickerChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div className="row">
            <div className="example-config col-xs-12 col-md-12 example-col">
                Selected date: {`${value?.toDateString()}`}
            </div>
            <div className="col-xs-12 col-md-12 example-col">
                <Label editorId="date">Select date</Label>
                <DatePicker id="date" value={value} onChange={handleChange} />
            </div>
        </div>
    );
};

export default App;
