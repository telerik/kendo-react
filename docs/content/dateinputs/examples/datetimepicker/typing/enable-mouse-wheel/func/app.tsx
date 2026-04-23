import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div className="example">
            <Label>
                Select Date
                <br />
                <DateTimePicker enableMouseWheel={false} width={300} />
            </Label>
        </div>
    );
};

export default App;
