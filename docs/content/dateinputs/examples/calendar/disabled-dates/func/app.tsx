import * as React from 'react';

import { Calendar, CalendarCell, CalendarCellProps, CalendarChangeEvent } from '@progress/kendo-react-dateinputs';

const CustomCell = (props: CalendarCellProps) => {
    return <CalendarCell {...props} isDisabled={props.isWeekend} />;
};

const sunday = 0;
const saturday = 6;

const App = () => {
    const [value, setValue] = React.useState<Date>(new Date());
    const handleChange = (event: CalendarChangeEvent) => {
        const dayOfWeek = event.value.getDay();

        if (dayOfWeek !== sunday && dayOfWeek !== saturday) {
            setValue(event.value);
        }
    };
    return <Calendar cell={CustomCell} value={value} onChange={handleChange} />;
};

export default App;
