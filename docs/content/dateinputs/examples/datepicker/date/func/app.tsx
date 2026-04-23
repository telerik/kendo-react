import * as React from 'react';

import { DatePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div>
            <Label editorId="date">Select date</Label>
            <DatePicker id="date" focusedDate={new Date(2025, 11, 25)} defaultShow />
        </div>
    );
};
export default App;
