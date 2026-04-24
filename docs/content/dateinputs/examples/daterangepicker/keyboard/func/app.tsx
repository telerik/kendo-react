import * as React from 'react';

import { DateRangePicker } from '@progress/kendo-react-dateinputs';

const App = () => {
    const picker = React.useRef<any>(undefined);

    const value = { start: new Date(2000, 2, 10), end: new Date(2000, 3, 5) };

    React.useEffect(() => {
        if (picker.current && picker.current.calendar && picker.current.calendar.element) {
            picker.current.calendar.element.focus();
        }
    });

    return (
        <div className="example-wrapper">
            <DateRangePicker ref={picker} defaultShow={true} defaultValue={value} />
        </div>
    );
};

export default App;
