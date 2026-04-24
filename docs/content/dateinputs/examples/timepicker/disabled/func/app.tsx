import React from 'react';
import { TimePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    return (
        <div className="example-wrapper">
            <p>Today's date:</p>
            <TimePicker disabled={true} value={new Date()} show={true} />
        </div>
    );
};

export default App;
