import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';
import CustomCalendar from './customCalendar';

const App = () => {
    return (
        <Label>
            Select date
            <br />
            <DateTimePicker calendar={CustomCalendar} defaultShow width={300} />
        </Label>
    );
};

export default App;
