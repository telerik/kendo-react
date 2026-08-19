import * as React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { EventLog } from '@docs-shared/EventLog';

const ButtonContainer = () => {
    const [events, setEvents] = React.useState<string[]>([]);

    const log = (type: string) => setEvents((prev) => [type, ...prev]);

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <Button
                onClick={() => log('click')}
                onMouseDown={() => log('mousedown')}
                onMouseUp={() => log('mouseup')}
                onFocus={() => log('focus')}
                onBlur={() => log('blur')}
                onKeyDown={() => log('keydown')}
            >
                My Button
            </Button>
        </EventLog>
    );
};

export default ButtonContainer;
