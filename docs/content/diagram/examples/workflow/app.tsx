import * as React from 'react';
import { Diagram, ShapeDefaults, ConnectionDefaults } from '@progress/kendo-react-diagram';
import { shapes, connections } from './data';
import { Diagram as DiagramWidget, MarkerType } from '@progress/kendo-diagram-common';

const shapeDefaults: ShapeDefaults = {
    stroke: { color: '#000', width: 1 },
    cornerRadius: 8,
    content: { fontSize: 16, fontWeight: '600', color: '#212529' },
    tooltip: { visible: true, cssClass: 'custom-tooltip' }
};

const connectionDefaults: ConnectionDefaults = {
    endCap: {
        type: MarkerType.ArrowEnd,
        path: 'M 0 0 L 8 7 L 0 14',
        anchor: { x: 8, y: 7 },
        fill: undefined,
        stroke: { color: '#4E4E4E', lineCap: 'round', lineJoin: 'round', width: 2 }
    },
    stroke: { color: '#4E4E4E', width: 2 },
    content: { color: '#212529', fontSize: 16 },
    tooltip: { visible: true, cssClass: 'custom-tooltip' }
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
            zoom={0.6}
            zoomMin={0.5}
            zoomMax={1.5}
            style={{ height: 680 }}
        />
    );
};

export default App;
