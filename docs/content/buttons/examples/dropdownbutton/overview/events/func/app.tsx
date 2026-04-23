import * as React from 'react';

import { DropDownButton } from '@progress/kendo-react-buttons';

interface EventLogProps {
    logs: string[];
    title: string;
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
            <ul className="event-log k-list" style={{ textAlign: 'right' }}>
                {renderLogs()}
            </ul>
        </div>
    );
};
const ButtonContainer = () => {
    const [logs, setLogs] = React.useState<string[]>([]);
    const handleDomEvent = (eventType: string) => {
        let newLogs = logs.slice();
        newLogs.unshift(eventType);
        setLogs(newLogs);
    };
    return (
        <React.Fragment>
            <DropDownButton
                text="User Settings"
                items={['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out']}
                onItemClick={() => handleDomEvent('item click')}
                onFocus={() => handleDomEvent('focus')}
                onBlur={() => handleDomEvent('blur')}
                onOpen={() => handleDomEvent('open')}
                onClose={() => handleDomEvent('close')}
            />
            <EventLog title="Event Log" logs={logs} />
        </React.Fragment>
    );
};
export default ButtonContainer;
