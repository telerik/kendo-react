import React from 'react';
import { TimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const defaultValue = new Date();

    return (
        <div className="row">
            <div className="col-xs-12 col-md-12 example-col">
                <p>TimePicker with default value</p>
                <TimePicker defaultValue={defaultValue} />
            </div>
        </div>
    );
};

export default App;
