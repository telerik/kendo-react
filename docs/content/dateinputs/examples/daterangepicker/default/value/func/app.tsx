import * as React from 'react';

import { DateRangePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const defaultValue = { start: new Date(2018, 8, 5), end: null };

    return (
        <div className="row">
            <div className="col-xs-12 col-md-12 example-col">
                <p>DateRangePicker with default value</p>
                <DateRangePicker defaultValue={defaultValue} allowReverse={true} swapButton={true} />
            </div>
        </div>
    );
};
export default App;
