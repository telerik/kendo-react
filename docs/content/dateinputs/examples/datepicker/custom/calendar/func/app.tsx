import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';
import { CustomCalendar } from './customCalendar';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div>
            <Label>
                Select date
                <br />
                <DatePicker calendar={CustomCalendar} defaultShow width={300} />
            </Label>
        </div>
    );
};

export default App;
