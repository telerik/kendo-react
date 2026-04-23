import * as React from 'react';
import { Diagram, ShapeDefaults, ConnectionDefaults, DiagramLayout } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';

const layout: DiagramLayout = {
    type: 'layered',
    subtype: 'down',
    horizontalSeparation: 100,
    verticalSeparation: 80
};

const shapeDefaults: ShapeDefaults = {
    tooltip: { visible: true, cssClass: 'custom-tooltip' }
};

const connectionDefaults: ConnectionDefaults = {
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
        <div style={{ width: '100%', height: 550 }}>
            <style>{`
            .custom-tooltip {
                width: 125px;
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
                layout={layout}
                zoom={0.9}
                zoomMin={0.5}
                zoomMax={1.5}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default App;
