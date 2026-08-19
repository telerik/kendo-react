import * as React from 'react';
import {
    MultiSelect,
    MultiSelectBlurEvent,
    MultiSelectChangeEvent,
    MultiSelectCloseEvent,
    MultiSelectFocusEvent,
    MultiSelectOpenEvent
} from '@progress/kendo-react-dropdowns';
import { Label } from '@progress/kendo-react-labels';
import { useAsyncFocusBlur } from '@progress/kendo-react-common';
import { EventLog } from '@docs-shared/EventLog';
import countries from './shared-dd-countries';

const App = () => {
    const [value, setValue] = React.useState<string[]>([]);
    const [events, setEvents] = React.useState<string[]>([]);

    const log = (msg: string) => setEvents((prev) => [msg, ...prev]);

    const onChange = (event: MultiSelectChangeEvent) => {
        log('change: ' + event.value);
        setValue(event.value);
    };
    const handleBlur = (event: MultiSelectBlurEvent) => log('blur');
    const handleFocus = (event: MultiSelectFocusEvent) => log('focus');
    const onClose = (event: MultiSelectCloseEvent) => log('close');
    const onOpen = (event: MultiSelectOpenEvent) => log('open');

    const { onFocus, onBlur } = useAsyncFocusBlur({
        onFocus: handleFocus,
        onBlur: handleBlur
    });

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <div>
                <Label editorId="country">Select country</Label>
                <br />
                <MultiSelect
                    id="country"
                    data={countries}
                    onOpen={onOpen}
                    onClose={onClose}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="e.g. Bulgaria"
                    style={{ width: '250px' }}
                />
            </div>
        </EventLog>
    );
};

export default App;
