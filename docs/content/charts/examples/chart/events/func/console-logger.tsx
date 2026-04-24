import * as React from 'react';

interface LoggerProps {
    events: string[];
    title: string;
}

const Logger = (props: LoggerProps) => (
    <div className="example-config">
        <h5>{props.title}</h5>
        <ul className="event-log">
            {props.events.reverse().map((event, idx) => (
                <li key={idx}>{event}</li>
            ))}
        </ul>
    </div>
);

export { Logger };
