import * as React from 'react';

import { DateRangePicker, DateRangePickerChangeEvent, SelectionRange } from '@progress/kendo-react-dateinputs';

const App = () => {
    const [value, setValue] = React.useState<SelectionRange>({ start: null, end: null });

    const handleChange = (event: DateRangePickerChangeEvent) => {
        setValue(event.value);
    };

    return (
        <div className="example-wrapper">
            <div className="example-config">
                <p>
                    The value is: <br />
                    start: {String(value.start)} <br />
                    end: {String(value.end)}
                </p>
            </div>
            <DateRangePicker swapButton={true} allowReverse={true} onChange={handleChange} show={true} />
        </div>
    );
};
export default App;
