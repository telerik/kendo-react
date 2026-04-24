import * as React from 'react';
import { Diagram, ShapeDefaults, ConnectionDefaults } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';

const shapeDefaults: ShapeDefaults = {
    tooltip: { visible: true, cssClass: 'custom-tooltip' },
    cornerRadius: 5
};

const connectionDefaults: ConnectionDefaults = {
    tooltip: { visible: true, cssClass: 'custom-tooltip' },
    stroke: { color: '#4E4E4E', width: 2 },
    endCap: { type: 'ArrowEnd', fill: { color: '#4E4E4E' } }
};

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);

    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    return (
        <div style={{ width: '100%', height: 400 }}>
            <style>{`
            .custom-tooltip {
                display: flex;
                width: 140px;
                text-align: center;
                justify-content: center;
            }
        `}</style>
            <Diagram
                ref={diagramRef}
                shapes={shapes}
                connections={connections}
                shapeDefaults={shapeDefaults}
                connectionDefaults={connectionDefaults}
                zoom={0.9}
                zoomMin={0.5}
                zoomMax={1.5}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default App;
