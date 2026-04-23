import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { CustomDateInput } from './customDateInput';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div>
            <Label>
                Select date
                <br />
                <DateTimePicker dateInput={CustomDateInput} defaultValue={new Date()} width={300} />
            </Label>
        </div>
    );
};

export default App;
