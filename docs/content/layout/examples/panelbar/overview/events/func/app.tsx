import * as React from 'react';

import { PanelBar, PanelBarItem, PanelBarSelectEventArguments } from '@progress/kendo-react-layout';
import { EventLog } from '@docs-shared/EventLog';

const App = () => {
    const [events, setEvents] = React.useState<string[]>([]);

    const handleSelect = (e: PanelBarSelectEventArguments) => {
        setEvents((prev) => [`${e.target.props.title}`, ...prev]);
    };

    return (
        <EventLog events={events} onClear={() => setEvents([])}>
            <PanelBar onSelect={handleSelect}>
                <PanelBarItem title="First item">
                    <div className="custom-template" style={{ padding: '30px', textAlign: 'center' }}>
                        <h4>Custom template: </h4>
                        <p>Item content</p>
                    </div>
                </PanelBarItem>
                <PanelBarItem title={'Second item'}>
                    <PanelBarItem title={'Child item'} />
                </PanelBarItem>
            </PanelBar>
        </EventLog>
    );
};
export default App;
