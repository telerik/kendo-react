import * as React from 'react';

import { Menu, MenuItem, MenuSelectEvent } from '@progress/kendo-react-layout';
import { EventLog } from '@docs-shared/EventLog';

const App = () => {
    const [events, setEvents] = React.useState<string[]>([]);

    const handleSelect = (e: MenuSelectEvent) => {
        setEvents((prev) => [`id: ${e.itemId} text: ${e.item.text}`, ...prev]);
    };

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <Menu onSelect={handleSelect}>
                <MenuItem text="First item">
                    <MenuItem text="Child item" />
                </MenuItem>
                <MenuItem text="Second item" />
            </Menu>
        </EventLog>
    );
};
export default App;
