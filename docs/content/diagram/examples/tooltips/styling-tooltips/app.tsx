import * as React from 'react';
import { Diagram, ShapeDefaults, ConnectionDefaults } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';
import './styles.css';

const shapeDefaults: ShapeDefaults = {
    tooltip: { cssClass: 'role-tooltip' }
};

const connectionDefaults: ConnectionDefaults = {
    tooltip: { cssClass: 'connection-tooltip-custom' },
    stroke: { color: '#4E4E4E', width: 2 }
};

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);

    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    return (
        <div style={{ width: '100%', height: 450 }}>
            <Diagram
                ref={diagramRef}
                shapes={shapes}
                connections={connections}
                shapeDefaults={shapeDefaults}
                connectionDefaults={connectionDefaults}
                zoom={0.8}
                zoomMin={0.5}
                zoomMax={1.5}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default App;
