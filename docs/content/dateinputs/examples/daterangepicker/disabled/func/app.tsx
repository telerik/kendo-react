import * as React from 'react';

import { DateRangePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const value = {
        start: new Date(2018, 11, 25),
        end: new Date(2018, 11, 27)
    };

    return (
        <div className="example-wrapper">
            <p>Christmas holiday:</p>
            <DateRangePicker disabled={true} value={value} show={true} />
        </div>
    );
};
export default App;
