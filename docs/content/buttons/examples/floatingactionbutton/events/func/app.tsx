import * as React from 'react';
import { FloatingActionButton } from '@progress/kendo-react-buttons';
import { gearIcon, pencilIcon, plusIcon, SVGIcon, trashIcon } from '@progress/kendo-svg-icons';
import { EventLog } from '@docs-shared/EventLog';

interface Item {
    svgIcon: SVGIcon;
    text: string;
}

const items: Item[] = [
    { svgIcon: plusIcon, text: 'Create' },
    { svgIcon: pencilIcon, text: 'Edit' },
    { svgIcon: trashIcon, text: 'Delete' }
];

const ButtonContainer = () => {
    const [events, setEvents] = React.useState<string[]>([]);
    const log = (type: string) => setEvents(prev => [type, ...prev]);

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <FloatingActionButton
                svgIcon={gearIcon}
                items={items}
                align={{ horizontal: 'start', vertical: 'top' }}
                onItemClick={() => log('item click')}
                onFocus={() => log('focus')}
                onBlur={() => log('blur')}
                onOpen={() => log('open')}
                onClose={() => log('close')}
                onKeyDown={() => log('key down')}
            />
        </EventLog>
    );
};

export default ButtonContainer;
