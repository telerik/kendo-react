import React from 'react';
import { TimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const defaultShow = true;

    return (
        <div className="row">
            <div className="col-xs-12 col-md-6 example-col">
                <p>TimePicker with default shown state</p>
                <TimePicker defaultShow={defaultShow} />
            </div>
        </div>
    );
};

export default App;
