import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div>
            <Label editorId="date">Date of Birth</Label>
            <br />
            <DatePicker id="date" placeholder="Select your birth date..." width={300} />
        </div>
    );
};

export default App;
