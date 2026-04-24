import * as React from 'react';

import { DateInput, DatePicker, TimePicker, Calendar } from '@progress/kendo-react-dateinputs';

const App = () => {
    const [value, setValue] = React.useState(new Date());
    const changeDate = ({ value }) => {
        setValue(value);
    };

    return (
        <div className="row example-wrapper" style={{ minHeight: 450 }}>
            <div className="col-xs-12 col-md-6 example-col">
                <p>DateInput</p>
                <DateInput value={value} onChange={changeDate} />
                <p>
                    (use <code>←</code> and <code>→</code> to navigate, <code>↑</code> and
                    <code>↓</code> to update)
                </p>
                <p>DatePicker</p>
                <DatePicker value={value} onChange={changeDate} />
                <p>
                    (use Alt+<code>↓</code> to open the calendar, <code>←</code> and
                    <code>→</code> to navigate, <code>↑</code> to increment and
                    <code>↓</code> to decrement the value)
                </p>
                <p>TimePicker</p>
                <TimePicker value={value} onChange={changeDate} />
                <p>
                    (use Alt+<code>↓</code> to open the time list, Tab to move to the next time section in the popup,{' '}
                    <code>↑</code> to increment and
                    <code>↓</code> to decrement the value)
                </p>
            </div>
            <div className="col-xs-12 col-md-6 example-col">
                <Calendar value={value} onChange={changeDate} />
            </div>
        </div>
    );
};

export default App;
