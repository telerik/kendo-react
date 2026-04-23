import * as React from 'react';

import { DateInput } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div className="example">
            <Label editorId="date">Select Date</Label>
            <br />
            <DateInput autoSwitchKeys={['Enter', ';', '-']} id="date" width={300} />
        </div>
    );
};

export default App;
