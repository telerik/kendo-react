import * as React from 'react';

import { EventLog } from '@docs-shared/EventLog';
import { ChartContainer } from './chart-container';

// Cap the log so a burst of hover events can't grow the list unbounded.
const MAX_EVENTS = 200;

const DemoContainer = () => {
    const [events, setEvents] = React.useState<string[]>([]);
    const onEvent = (eventName: string) => {
        setEvents((prev) => [eventName, ...prev].slice(0, MAX_EVENTS));
    };
    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <ChartContainer onEvent={onEvent} />
        </EventLog>
    );
};

export default DemoContainer;
