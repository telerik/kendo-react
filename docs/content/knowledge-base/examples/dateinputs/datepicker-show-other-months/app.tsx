import * as React from 'react';

import { Calendar, CalendarProps, DatePicker } from '@progress/kendo-react-dateinputs';

import { Label } from '@progress/kendo-react-labels';

const CustomCalendar = (props: CalendarProps) => {
    return <Calendar {...props} showOtherMonthDays />;
};

const App = () => {
    return (
        <div>
            <Label>
                Select date
                <br />
                <DatePicker calendar={CustomCalendar} defaultShow width={300} />
            </Label>
        </div>
    );
};

export default App;
