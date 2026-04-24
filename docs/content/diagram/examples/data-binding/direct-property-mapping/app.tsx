import * as React from 'react';
import { Diagram, ConnectionDefaults } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { processSteps, connections } from './data';

const connectionDefaults: ConnectionDefaults = {
    stroke: {
        color: '#4E4E4E',
        width: 2
    },
    endCap: {
        type: 'ArrowEnd',
        fill: { color: '#4E4E4E' }
    }
};

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);

    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    return (
        <Diagram
            ref={diagramRef}
            shapes={processSteps}
            connections={connections}
            connectionDefaults={connectionDefaults}
            zoom={0.8}
            zoomMin={0.5}
            zoomMax={1.5}
            style={{ height: 540 }}
        />
    );
};

export default App;
