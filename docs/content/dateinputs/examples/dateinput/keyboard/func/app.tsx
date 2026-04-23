import * as React from 'react';

import { DateInput, DateInputChangeEvent } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    const changeDate = (event: DateInputChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div>
            <Label editorId="date">Enter date</Label>
            <DateInput id="date" value={value} onChange={changeDate} width={300} />
        </div>
    );
};

export default App;
