import * as React from 'react';
import { Diagram, ShapeDefaults, ConnectionDefaults } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';

const shapeDefaults: ShapeDefaults = {
    width: 120,
    height: 70,
    content: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Arial'
    },
    stroke: {
        color: '#333',
        width: 2
    }
};

const connectionDefaults: ConnectionDefaults = {
    stroke: {
        color: '#979797',
        width: 2
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
            style={{ height: 360 }}
        />
    );
};

export default App;
