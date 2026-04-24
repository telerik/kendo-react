import * as React from 'react';

import { DateRangePicker, DateRangePickerPopupSettings } from '@progress/kendo-react-dateinputs';

const App = () => {
    const popupSettings: DateRangePickerPopupSettings = {
        animate: false,
        anchorAlign: {
            horizontal: 'center',
            vertical: 'bottom'
        },
        popupAlign: {
            horizontal: 'center',
            vertical: 'top'
        }
    };

    return (
        <div className="example-wrapper" style={{ textAlign: 'center' }}>
            <DateRangePicker popupSettings={popupSettings} />
        </div>
    );
};

export default App;
