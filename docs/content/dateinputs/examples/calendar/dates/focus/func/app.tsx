import * as React from 'react';

import { Calendar, CalendarHandle } from '@progress/kendo-react-dateinputs';

const App = () => {
    const calendarRef = React.useRef<CalendarHandle>(null);
    React.useEffect(() => {
        if (calendarRef.current) {
            calendarRef.current.focus();
        }
    }, []);
    return <Calendar ref={calendarRef} focusedDate={new Date(2025, 2, 26)} />;
};

export default App;
