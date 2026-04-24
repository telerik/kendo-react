import * as React from 'react';

import { DateTimePicker } from '@progress/kendo-react-dateinputs';
import { Label } from '@progress/kendo-react-labels';

const App = () => {
    return (
        <div className="row">
            <div className="col-xs-12 col-md-12 example-col">
                <Label editorId="date">DateTimePicker with default Popup state</Label>
                <DateTimePicker id="date" defaultShow />
            </div>
        </div>
    );
};
export default App;
