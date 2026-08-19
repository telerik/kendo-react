import * as React from 'react';
import { Signature, SignatureChangeEvent } from '@progress/kendo-react-inputs';
import { EventLog } from '@docs-shared/EventLog';

const App = () => {
    const [value, setValue] = React.useState<string>();
    const [events, setEvents] = React.useState<string[]>([]);

    const log = (message: string) => {
        setEvents((prev) => [message, ...prev]);
    };

    const onChange = (e: SignatureChangeEvent) => {
        setValue(e.value);
        log(e.value ? 'Change' : 'Change (cleared)');
    };

    const onFocus = () => {
        log('Focus');
    };

    const onBlur = () => {
        log('Blur');
    };

    const onOpen = () => {
        log('Open');
    };

    const onClose = () => {
        log('Close');
    };

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <Signature
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onOpen={onOpen}
                onClose={onClose}
                popupScale={2}
            />
        </EventLog>
    );
};

export default App;
