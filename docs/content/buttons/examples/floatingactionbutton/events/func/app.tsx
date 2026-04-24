import * as React from 'react';

import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { gearIcon, pencilIcon, plusIcon, SVGIcon, trashIcon } from '@progress/kendo-svg-icons';

interface Item {
    svgIcon: SVGIcon;
    text: string;
}

interface EventLogProps {
    logs: string[];
    title: string;
}

const items: Item[] = [
    { svgIcon: plusIcon, text: 'Create' },
    { svgIcon: pencilIcon, text: 'Edit' },
    { svgIcon: trashIcon, text: 'Delete' }
];

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
        <div className="example-config" style={{ marginTop: 60 }}>
            <h5>{props.title}</h5>
            <ul className="event-log k-list" style={{ textAlign: 'right' }}>
                {renderLogs()}
            </ul>
        </div>
    );
};
const ButtonContainer = () => {
    const [logs, setLogs] = React.useState([]);
    const handleDomEvent = (eventType: string) => {
        let newLogs: any = logs.slice();
        newLogs.unshift(eventType);
        setLogs(newLogs);
    };
    return (
        <div>
            <FloatingActionButton
                svgIcon={gearIcon}
                items={items}
                align={{ horizontal: 'start', vertical: 'top' }}
                onItemClick={() => handleDomEvent('item click')}
                onFocus={() => handleDomEvent('focus')}
                onBlur={() => handleDomEvent('blur')}
                onOpen={() => handleDomEvent('open')}
                onClose={() => handleDomEvent('close')}
                onKeyDown={() => handleDomEvent('key down')}
            />
            <EventLog title="Event Log" logs={logs} />
        </div>
    );
};
export default ButtonContainer;
