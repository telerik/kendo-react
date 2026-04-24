import * as React from 'react';
import { Diagram, DiagramShapeTooltip, ShapeDefaults, DiagramLayout } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { shapes, connections } from './data';
import './styles.css';

const layout: DiagramLayout = {
    type: 'tree',
    subtype: 'down',
    horizontalSeparation: 80,
    verticalSeparation: 60
};

const shapeDefaults: ShapeDefaults = {
    tooltip: { visible: true, cssClass: 'custom-tooltip' },
    cornerRadius: 5
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
            <div className="info-banner">
                Hover over the shapes to see custom tooltip template.
            </div>
            <Diagram
                ref={diagramRef}
                shapes={shapes}
                connections={connections}
                shapeDefaults={shapeDefaults}
                layout={layout}
                zoom={0.9}
                zoomMin={0.5}
                zoomMax={1.5}
                style={{ width: '100%', height: 'calc(100% - 48px)' }}
            >
                <DiagramShapeTooltip>
                    {(shape: any) => (
                        <div className="employee-tooltip">
                            <strong>{shape.dataItem.name}</strong>
                            <div>{shape.dataItem.title}</div>
                            <div>{shape.dataItem.email}</div>
                        </div>
                    )}
                </DiagramShapeTooltip>
            </Diagram>
        </div>
    );
};

export default App;
