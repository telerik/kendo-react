import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    const defaultValue = new Date();

    return (
        <div className="row">
            <div className="col-xs-12 col-md-12 example-col">
                <Label editorId="date">DateTimePicker with default value</Label>
                <DateTimePicker id="date" defaultValue={defaultValue} />
            </div>
        </div>
    );
};
export default App;
