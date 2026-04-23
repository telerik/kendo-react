import * as React from 'react';

import { DateInput, DateInputChangeEvent } from '@progress/kendo-react-dateinputs';
import { Hint } from '@progress/kendo-react-labels';

const App = () => {
    const [value, setValue] = React.useState<Date | null>(new Date(2017, 2, 10, 13, 30, 0));
    const steps = { year: 10, day: 5, hour: 2, minute: 15 };

    const changeDate = (event: DateInputChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <DateInput
                format="MM/dd/yyyy hh:mm a"
                steps={steps}
                value={value}
                onChange={changeDate}
                label="Appointment date"
                ariaDescribedBy="dateHint"
            />
            <Hint id="dateHint">(↑ to increment and ↓ to decrement the value)</Hint>
        </div>
    );
};

export default App;
