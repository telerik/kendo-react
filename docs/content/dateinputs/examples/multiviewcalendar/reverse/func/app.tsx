import * as React from 'react';

import { MultiViewCalendar, MultiViewCalendarChangeEvent } from '@progress/kendo-react-dateinputs';

const App = () => {
    const [value, setValue] = React.useState<any>({ start: null, end: null });

    const handleChange = (event: MultiViewCalendarChangeEvent) => {
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
            <MultiViewCalendar allowReverse={true} onChange={handleChange} mode={'range'} />
        </div>
    );
};
export default App;
