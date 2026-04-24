import * as React from 'react';

import { Button } from '@progress/kendo-react-buttons';

interface EventLogProps {
    title: string;
    logs: string[];
}

const EventLog = (props: EventLogProps) => {
    const renderLogs = () => {
        return props.logs.map((log, index) => {
            return (
                <li key={index} className="k-list-item">
                    {log}
                </li>
            );
        });
    };

    return (
        <div className="example-config">
            <h5>{props.title}</h5>
            <ul className="event-log k-list">{renderLogs()}</ul>
        </div>
    );
};

const ButtonContainer = () => {
    const [logs, setLogs] = React.useState<string[]>([]);

    const logEvent = (event: any) => {
        let newLogs: Array<string> = logs.slice();
        newLogs.unshift(event.type);
        setLogs(newLogs);
    };

    const handleMouseEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
        logEvent(event);
    };

    const handleFocusEvent = (event: React.FocusEvent<HTMLButtonElement>) => {
        logEvent(event);
    };

    const handleKeyBoardEvent = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        logEvent(event);
    };

    return (
        <React.Fragment>
            <Button
                onClick={handleMouseEvent}
                onMouseDown={handleMouseEvent}
                onMouseUp={handleMouseEvent}
                onFocus={handleFocusEvent}
                onBlur={handleFocusEvent}
                onKeyPress={handleKeyBoardEvent}
            >
                My Button
            </Button>
            <EventLog title="Event Log" logs={logs} />
        </React.Fragment>
    );
};

export default ButtonContainer;
