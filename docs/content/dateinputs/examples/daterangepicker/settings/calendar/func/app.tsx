import * as React from 'react';

import { DateRangePicker, DateRangePickerCalendarSettings } from '@progress/kendo-react-dateinputs';

const App = () => {
    const calendarSettings: DateRangePickerCalendarSettings = {
        bottomView: 'year',
        topView: 'decade',
        views: 1
    };

    return (
        <div className="example-wrapper">
            <DateRangePicker calendarSettings={calendarSettings} />
        </div>
    );
};

export default App;
