import * as React from 'react';

import { SplitButton } from '@progress/kendo-react-buttons';
import { clipboardHtmlIcon, clipboardTextIcon, SVGIcon } from '@progress/kendo-svg-icons';

interface EventLogProps {
    logs: string[];
    title: string;
}

interface Item {
    text: string;
    svgIcon?: SVGIcon;
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

const items: Item[] = [
    {
        text: 'Keep Text Only',
        svgIcon: clipboardTextIcon
    },
    {
        text: 'Paste as HTML',
        svgIcon: clipboardHtmlIcon
    },
    {
        text: 'Paste Markdown',
        svgIcon: clipboardHtmlIcon
    },
    {
        text: 'Set Default Paste'
    }
];

const ButtonContainer = () => {
    const [logs, setLogs] = React.useState<string[]>([]);

    const handleDomEvent = (eventType: string) => {
        let newLogs: string[] = logs.slice();
        newLogs.unshift(eventType);
        setLogs(newLogs);
    };
    return (
        <React.Fragment>
            <SplitButton
                text="Paste"
                items={items}
                onButtonClick={() => handleDomEvent('button click')}
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
