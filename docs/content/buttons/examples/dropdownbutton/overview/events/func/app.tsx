import * as React from 'react';
import { DropDownButton } from '@progress/kendo-react-buttons';
import { EventLog } from '@docs-shared/EventLog';

const ButtonContainer = () => {
    const [events, setEvents] = React.useState<string[]>([]);
    const log = (type: string) => setEvents((prev) => [type, ...prev]);

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <DropDownButton
                text="User Settings"
                items={['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out']}
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
