import * as React from 'react';
import { SplitButton } from '@progress/kendo-react-buttons';
import { clipboardHtmlIcon, clipboardTextIcon, SVGIcon } from '@progress/kendo-svg-icons';
import { EventLog } from '@docs-shared/EventLog';

interface Item {
    text: string;
    svgIcon?: SVGIcon;
}

const items: Item[] = [
    { text: 'Keep Text Only', svgIcon: clipboardTextIcon },
    { text: 'Paste as HTML', svgIcon: clipboardHtmlIcon },
    { text: 'Paste Markdown', svgIcon: clipboardHtmlIcon },
    { text: 'Set Default Paste' }
];

const ButtonContainer = () => {
    const [events, setEvents] = React.useState<string[]>([]);
    const log = (type: string) => setEvents((prev) => [type, ...prev]);

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <SplitButton
                text="Paste"
                items={items}
                onButtonClick={() => log('button click')}
                onItemClick={() => log('item click')}
                onFocus={() => log('focus')}
                onBlur={() => log('blur')}
                onOpen={() => log('open')}
                onClose={() => log('close')}
            />
        </EventLog>
    );
};

export default ButtonContainer;
