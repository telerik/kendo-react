import * as React from 'react';

import { Logger } from './console-logger';
import { ChartContainer } from './chart-container';

const DemoContainer = () => {
    const [events, setEvents] = React.useState<Array<any>>([]);
    const onEvent = (eventName) => {
        setEvents([...events, eventName]);
    };
    return (
        <div>
            <ChartContainer onEvent={onEvent} />
            <Logger title="Event log" events={events} />
        </div>
    );
};

export default DemoContainer;
