import * as React from 'react';
import { Diagram, ShapeDefaults, ConnectionDefaults } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';

const shapeDefaults: ShapeDefaults = {
    width: 140,
    height: 70,
    content: { color: 'white', fontSize: 14 }
};

const connectionDefaults: ConnectionDefaults = {
    stroke: { width: 2 },
    endCap: { type: 'ArrowEnd' }
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
            shapeDefaults={shapeDefaults}
            connectionDefaults={connectionDefaults}
            style={{ height: 400 }}
        />
    );
};

export default App;
