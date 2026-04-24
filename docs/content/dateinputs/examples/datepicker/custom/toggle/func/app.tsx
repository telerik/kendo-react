import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';
import CustomToggleButton from './customToggleButton';

const App = () => {
    return (
        <div>
            <Label>
                Select date <br />
                <DatePicker toggleButton={CustomToggleButton} width={300} />
            </Label>
        </div>
    );
};

export default App;
