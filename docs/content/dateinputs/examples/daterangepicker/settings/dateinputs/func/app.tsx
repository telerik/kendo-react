import * as React from 'react';

import { DateRangePicker, DateRangePickerDateInputSettings } from '@progress/kendo-react-dateinputs';

const App = () => {
    const startDateInputSettings = {
        spinners: true,
        label: 'Holiday Start',
        format: 'dd/M/yy'
    };

    const endDateInputSettings: DateRangePickerDateInputSettings = {
        steps: { day: 2 },
        label: 'Holiday End',
        formatPlaceholder: 'short'
    };

    return (
        <div className="example-wrapper">
            <DateRangePicker
                startDateInputSettings={startDateInputSettings}
                endDateInputSettings={endDateInputSettings}
            />
        </div>
    );
};

export default App;
