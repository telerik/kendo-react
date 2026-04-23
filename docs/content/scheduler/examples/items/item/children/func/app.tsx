import * as React from 'react';
import {
    Scheduler,
    DayView,
    MonthView,
    SchedulerItem,
    SchedulerItemContent,
    SchedulerItemProps
} from '@progress/kendo-react-scheduler';
import { useInternationalization } from '@progress/kendo-react-intl';
import { sampleData, displayDate } from './sc-events-utc';

const CustomItem = (props: SchedulerItemProps) => {
    const intl = useInternationalization();

    return (
        <SchedulerItem {...props}>
            {props.children}
            {!props.isAllDay && (
                <SchedulerItemContent>
                    {intl.formatDate(props.zonedStart, 't')} - {intl.formatDate(props.zonedEnd, 't')}
                </SchedulerItemContent>
            )}
        </SchedulerItem>
    );
};

const App = () => {
    return (
        <Scheduler data={sampleData} defaultDate={displayDate} item={CustomItem}>
            <DayView />
            <MonthView />
        </Scheduler>
    );
};

export default App;
