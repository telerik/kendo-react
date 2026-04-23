import * as React from 'react';

import { DateRangePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const min = new Date(2018, 8, 1);
    const max = new Date(2018, 9, 25);
    const defaultValue = { start: new Date(2018, 8, 5), end: new Date(2018, 9, 13) };

    return (
        <div>
            <div className="example-config">
                <p>Select a date range:</p>
                <DateRangePicker min={min} max={max} defaultValue={defaultValue} />
            </div>
        </div>
    );
};
export default App;
