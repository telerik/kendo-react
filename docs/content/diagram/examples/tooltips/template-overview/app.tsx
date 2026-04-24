import * as React from 'react';
import {
    Diagram,
    DiagramShapeTooltip,
    DiagramConnectionTooltip,
    ShapeDefaults,
    ConnectionDefaults,
    DiagramLayout
} from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';
import './styles.css';

const layout: DiagramLayout = {
    type: 'tree',
    subtype: 'down',
    horizontalSeparation: 40,
    verticalSeparation: 80
};

const shapeDefaults: ShapeDefaults = {
    tooltip: { visible: true, cssClass: 'custom-tooltip' },
    cornerRadius: 5
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
        <div style={{ width: '100%', height: 570 }}>
            <div className="info-banner">
                Hover over shapes and connections to see custom tooltips.
            </div>
            <Diagram
                ref={diagramRef}
                shapes={shapes}
                connections={connections}
                shapeDefaults={shapeDefaults}
                connectionDefaults={connectionDefaults}
                layout={layout}
                zoom={0.85}
                zoomMin={0.5}
                zoomMax={1.5}
                style={{ width: '100%', height: 'calc(100% - 48px)' }}
            >
                <DiagramShapeTooltip>
                    {(shape: any) => (
                        <div className="employee-tooltip">
                            <strong>{shape.dataItem.name}</strong>
                            <div className="role">{shape.dataItem.title}</div>
                            <div className="dept">{shape.dataItem.department}</div>
                            <div className="email">{shape.dataItem.email}</div>
                        </div>
                    )}
                </DiagramShapeTooltip>
                <DiagramConnectionTooltip>
                    {(connection: any) => (
                        <div className="relationship-tooltip">{connection.dataItem.relationship}</div>
                    )}
                </DiagramConnectionTooltip>
            </Diagram>
        </div>
    );
};

export default App;
