import * as React from 'react';
import { Scheduler, AgendaView, TimelineView, DayView, WeekView, MonthView } from '@progress/kendo-react-scheduler';
import { useInternationalization } from '@progress/kendo-react-intl';
import { sampleData, displayDate } from './sc-events-utc';

const App = () => {
    const intl = useInternationalization();
    const [date, setDate] = React.useState(displayDate);

    const handleDateChange = React.useCallback(
        (event) => {
            setDate(event.value);
        },
        [setDate]
    );

    return (
        <Scheduler
            role="region"
            ariaLabel={`Meetings for ${intl.formatDate(date, 'd')}`}
            data={sampleData}
            date={date}
            onDateChange={handleDateChange}
            editable={true}
        >
            <AgendaView />
            <TimelineView />
            <DayView />
            <WeekView />
            <MonthView />
        </Scheduler>
    );
};

export default App;
