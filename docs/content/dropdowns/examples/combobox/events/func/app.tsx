import * as React from 'react';
import { ComboBox, ComboBoxChangeEvent, ComboBoxFilterChangeEvent } from '@progress/kendo-react-dropdowns';
import { EventLog } from '@docs-shared/EventLog';

const App = () => {
    const source = ['Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan'];
    const [events, setEvents] = React.useState<string[]>([]);

    const log = (msg: string) => setEvents((prev) => [msg, ...prev]);

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <div>
                <div>Enter country:</div>
                <ComboBox
                    data={source}
                    onOpen={() => log('open')}
                    onClose={() => log('close')}
                    onFocus={() => log('focus')}
                    onBlur={() => log('blur')}
                    onChange={(event: ComboBoxChangeEvent) => log('change: ' + event.target.value)}
                    onFilterChange={(event: ComboBoxFilterChangeEvent) => log('filterChange: ' + event.filter.value)}
                    filterable={true}
                    placeholder="e.g. Austria"
                    style={{ width: '300px' }}
                />
            </div>
        </EventLog>
    );
};

export default App;
