import * as React from 'react';

import { Scheduler, DayView, WeekView, MonthView, SchedulerViewChangeEvent } from '@progress/kendo-react-scheduler';
import { sampleData, displayDate } from './sc-events-utc';

const App = () => {
    const [view, setView] = React.useState('day');

    // Handles Scheduler View Change
    const handleViewChange = React.useCallback((event: SchedulerViewChangeEvent) => {
        setView(event.value);
    }, []);

    // Handles external View Change
    const handleViewSelect = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setView(event.target.value);
    }, []);

    return (
        <div>
            <div className="example-config">
                <select value={view} onChange={handleViewSelect}>
                    <option value={'day'}>Day</option>
                    <option value={'week'}>Week</option>
                    <option value={'month'}>Month</option>
                </select>
            </div>
            <Scheduler view={view} onViewChange={handleViewChange} data={sampleData} defaultDate={displayDate}>
                <DayView />
                <WeekView />
                <MonthView />
            </Scheduler>
        </div>
    );
};

export default App;
