import * as React from 'react';

import { DateInput } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div>
            <Label editorId="date">Select date</Label>
            <DateInput id="date" placeholder="Type in your birth date..." width={300} />
        </div>
    );
};

export default App;
