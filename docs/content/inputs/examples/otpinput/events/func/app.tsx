import * as React from 'react';
import { OTPInput, OTPInputChangeEvent, OTPInputFocusEvent, OTPInputBlurEvent } from '@progress/kendo-react-inputs';
import { Label } from '@progress/kendo-react-labels';
import { EventLog } from '@docs-shared/EventLog';
import './styles.css';

const App = () => {
    const [value, setValue] = React.useState('');
    const [events, setEvents] = React.useState<string[]>([]);

    const log = (event: string) => {
        setEvents((prev) => [event, ...prev]);
    };

    const handleChange = (event: OTPInputChangeEvent) => {
        setValue(event.value);
        log(`onChange ${event.value.replace(/ /g, '_')}`);
    };

    const handleFocus = (_event: OTPInputFocusEvent) => {
        log('onFocus, cell index: ' + _event.cellIndex);
    };

    const handleBlur = (_event: OTPInputBlurEvent) => {
        log('onBlur');
    };

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <div className="example-col">
                <Label className="k-display-block">
                    Enter verification code
                    <OTPInput value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
                </Label>
            </div>
        </EventLog>
    );
};

export default App;
