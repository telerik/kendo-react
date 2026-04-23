import * as React from 'react';
import { Diagram, ShapeDefaults, ConnectionDefaults } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';

const shapeDefaults: ShapeDefaults = {
    width: 180,
    height: 80,
    content: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Arial',
        fontWeight: '600'
    },
    stroke: {
        width: 2
    }
};

const connectionDefaults: ConnectionDefaults = {
    stroke: {
        color: '#666',
        width: 2
    },
    endCap: {
        type: 'ArrowEnd',
        fill: { color: '#666' }
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
            shapes={shapes}
            connections={connections}
            shapeDefaults={shapeDefaults}
            connectionDefaults={connectionDefaults}
            style={{ height: 450 }}
        />
    );
};

export default App;
