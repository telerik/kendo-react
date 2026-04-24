import * as React from 'react';
import { Scheduler, DayView } from '@progress/kendo-react-scheduler';

import '@progress/kendo-date-math/tz/America/Los_Angeles';
import '@progress/kendo-date-math/tz/Europe/Sofia';
import '@progress/kendo-date-math/tz/Asia/Tokyo';

const App = () => {
    const [date, setSchedulerDate] = React.useState(new Date());
    const [step] = React.useState(2);

    const clearTime = (date) => {
        const noTimeDate = new Date(date);
        noTimeDate.setHours(0, 0, 0, 0);
        return noTimeDate;
    };

    const onDateChange = (args) => {
        const currentValue = new Date(date);
        const newValue = new Date(args.value);

        const next = new Date(date);
        next.setDate(next.getDate() + step);

        const prev = new Date(date);
        prev.setDate(prev.getDate() - step);

        clearTime(newValue).getTime() > clearTime(currentValue).getTime()
            ? setSchedulerDate(next)
            : setSchedulerDate(prev);
    };

    return (
    <div>
      <Scheduler onDateChange={onDateChange} date={date}>
        <DayView />
      </Scheduler>
    </div>
    );
}

export default App;
