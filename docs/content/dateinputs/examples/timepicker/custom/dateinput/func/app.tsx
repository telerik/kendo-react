import * as React from 'react';

import { TimePicker } from '@progress/kendo-react-dateinputs';
import { CustomDateInput } from './customDateInput';

const App = () => {
    return (
        <div>
            <p>Enter time:</p>
            <TimePicker dateInput={CustomDateInput} defaultValue={new Date()} width={300} />
        </div>
    );
};

export default App;
