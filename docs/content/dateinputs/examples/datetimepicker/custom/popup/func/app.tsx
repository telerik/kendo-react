import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';
import CustomPopup from './customPopup';

const App = () => {
    return (
        <Label>
            Select date <br />
            <DateTimePicker popup={CustomPopup} width={300} />
        </Label>
    );
};

export default App;
