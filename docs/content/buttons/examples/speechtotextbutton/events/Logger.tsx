import React from 'react';
import './styles.css';

const Logger = ({ events = [], title = 'Event Log' }) => {
    return (
        <div className="example-config">
            <h5>{title}</h5>
            <ul className="event-log">
                {events.map((event, idx) => (
                    <li key={idx}>
                        {events.length - idx}. {event}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Logger;
