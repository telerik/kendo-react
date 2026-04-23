import * as React from 'react';
import { Sankey, SankeyEvent, SankeyLinkDefaults } from '@progress/kendo-react-charts';
import { data } from './data';

const links: SankeyLinkDefaults = {
    colorType: 'source'
};

const App: React.FC = () => {
    const [eventType, setEventType] = React.useState<string>('');

    const eventLog = React.useCallback((event: SankeyEvent) => {
        setEventType(event.type);
    }, []);

    return (
        <>
            <div>
                Event: <b>{eventType}</b>
            </div>
            <Sankey
                style={{ height: 250 }}
                data={data}
                onNodeEnter={eventLog}
                onNodeLeave={eventLog}
                onLinkEnter={eventLog}
                onLinkLeave={eventLog}
                onNodeClick={eventLog}
                onLinkClick={eventLog}
                links={links}
            />
        </>
    );
};

export default App;
