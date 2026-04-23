import * as React from 'react';
import { Diagram, ShapeDefaults, ConnectionDefaults } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';

const shapeDefaults: ShapeDefaults = {
    width: 120,
    height: 70,
    content: {
        color: '#1F2937',
        fontSize: 14
    }
};

const connectionDefaults: ConnectionDefaults = {
    stroke: {
        color: '#8A8A8A',
        width: 2
    },
    endCap: {
        type: 'ArrowEnd'
    },
    selectable: true
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
            style={{ height: 380 }}
        />
    );
};

export default App;
