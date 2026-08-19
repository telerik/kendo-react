import * as React from 'react';

import { ColorPalette, ColorPaletteChangeEvent } from '@progress/kendo-react-inputs';
import { EventLog } from '@docs-shared/EventLog';

const App = () => {
    const [events, setEvents] = React.useState<string[]>([]);

    const handleOnChange = (e: ColorPaletteChangeEvent) => {
        setEvents((prev) => [`hex: ${e.value}, rgba: ${e.rgbaValue}`, ...prev]);
    };

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <p>Select color:</p>
            <ColorPalette onChange={handleOnChange} palette="basic" />
        </EventLog>
    );
};

export default App;
