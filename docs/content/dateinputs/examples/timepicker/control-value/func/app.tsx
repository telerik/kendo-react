import React, { useState } from 'react';
import { TimePicker, TimePickerChangeEvent } from '@progress/kendo-react-dateinputs';

const App = () => {
    const [value, setValue] = useState<Date | null>(new Date());

    const handleChange = (event: TimePickerChangeEvent) => {
        setValue(event.target.value);
    };

    return (
        <div className="row">
            <div className="example-config col-xs-12 col-md-12 example-col">
                <p>The value is: {`${value}`}</p>
            </div>
            <div className="col-xs-12 col-md-12 example-col">
                <p>Controlled TimePicker</p>
                <TimePicker value={value} onChange={handleChange} />
            </div>
        </div>
    );
};

export default App;
