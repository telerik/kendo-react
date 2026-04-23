import * as React from 'react';
import { Diagram, ShapeDefaults, ConnectionDefaults } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';

const shapeDefaults: ShapeDefaults = {
    width: 80,
    height: 50
};

const connectionDefaults: ConnectionDefaults = {
    stroke: { width: 2 },
    endCap: { type: 'ArrowEnd', fill: { color: '#666' } }
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
            shapes={shapes}
            connections={connections}
            connectionDefaults={connectionDefaults}
            zoom={0.8}
            zoomMin={0.5}
            zoomMax={1.5}
            style={{ height: 400 }}
        />
    );
};

export default App;
