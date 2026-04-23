import * as React from 'react';
import {
    Diagram,
    DiagramConnectionTooltip,
    DiagramShapeTooltip,
    ShapeDefaults,
    ConnectionDefaults,
    DiagramLayout,
    DiagramEditable
} from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget, Group, TextBlock, Image, Process } from '@progress/kendo-diagram-common';
import { EmployeeDataItem, shapesData, connectionsData } from './data';
import './styles.css';

interface ShapeVisualData {
    dataItem: { dataItem: EmployeeDataItem };
}

const layout: DiagramLayout = {
    type: 'tree',
    subtype: 'down',
    horizontalSeparation: 40,
    verticalSeparation: 40,
    radialFirstLevelSeparation: 150,
    radialSeparation: 100
};

const visualTemplate = (options: ShapeVisualData): Group => {
    const g = new Group();
    const dataItem = options.dataItem.dataItem;

    g.append(
        new Process({
            width: 300,
            height: 92,
            stroke: { width: 1, color: dataItem.strokeColor },
            fill: { color: dataItem.colorScheme },
            cornerRadius: 5
        })
    );
    g.append(
        new TextBlock({
            text: dataItem.firstName + ' ' + dataItem.lastName,
            x: 100,
            y: 15,
            fill: '#212529',
            fontSize: 20,
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500
        })
    );
    g.append(
        new TextBlock({
            text: dataItem.title,
            x: 100,
            y: 52,
            fill: '#212529',
            fontSize: 16,
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400
        })
    );
    g.append(new Image({ source: dataItem.image, x: 16, y: 12, width: 68, height: 68 }));

    return g;
};

const shapeDefaults: ShapeDefaults = { tooltip: { visible: true }, visual: visualTemplate };
const connectionDefaults: ConnectionDefaults = { tooltip: { visible: true } };
const editable: boolean | DiagramEditable = true;

const getEmployeeName = (shapeId: string): string => {
    const shape = shapesData.find((s) => s.id === shapeId);
    if (shape?.dataItem) {
        return `${shape.dataItem.firstName} ${shape.dataItem.lastName}`;
    }
    return shapeId;
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
            shapeDefaults={shapeDefaults}
            connectionDefaults={connectionDefaults}
            shapes={shapesData}
            connections={connectionsData}
            editable={editable}
            layout={layout}
            zoom={0.7}
            zoomMin={0.5}
            zoomMax={1.5}
            style={{ height: 550 }}
        >
            <DiagramShapeTooltip>
                {(shape: any) => (
                    <div className="tooltip-container">
                        <div className="tooltip-header">
                            <img src={shape.dataItem.image} className="tooltip-avatar" alt={shape.dataItem.firstName} />
                            <div>
                                <h3 className="tooltip-name">
                                    {shape.dataItem.firstName} {shape.dataItem.lastName}
                                </h3>
                                <p className="tooltip-title">{shape.dataItem.title}</p>
                            </div>
                        </div>
                        <div className="tooltip-details">
                            <div className="tooltip-detail-item">
                                <strong className="tooltip-label">Department:</strong>
                                <span className="tooltip-value">{shape.dataItem.department}</span>
                            </div>
                            <div className="tooltip-detail-item">
                                <strong className="tooltip-label">Email:</strong>
                                <span className="tooltip-value">{shape.dataItem.email}</span>
                            </div>
                            <div className="tooltip-detail-item">
                                <strong className="tooltip-label">Phone:</strong>
                                <span className="tooltip-value">{shape.dataItem.phone}</span>
                            </div>
                            <div className="tooltip-detail-item">
                                <strong className="tooltip-label">Location:</strong>
                                <span className="tooltip-value">{shape.dataItem.location}</span>
                            </div>
                            <div className="tooltip-detail-item">
                                <strong className="tooltip-label">Years at Company:</strong>
                                <span className="tooltip-value">{shape.dataItem.yearsAtCompany}</span>
                            </div>
                        </div>
                    </div>
                )}
            </DiagramShapeTooltip>
            <DiagramConnectionTooltip>
                {(dataItem: any) => (
                    <div className="connection-tooltip">
                        <div className="connection-flow">
                            <span className="connection-from">{getEmployeeName(dataItem.from)}</span>
                            <span className="connection-arrow">→</span>
                            <span className="connection-to">{getEmployeeName(dataItem.to)}</span>
                        </div>
                        <div className="connection-relationship">{dataItem.tooltipText}</div>
                    </div>
                )}
            </DiagramConnectionTooltip>
        </Diagram>
    );
};

export default App;
