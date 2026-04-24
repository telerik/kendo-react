import * as React from 'react';
import {
    Diagram,
    ShapeModelFields,
    ConnectionModelFields,
    ConnectionDefaults,
    ShapeDefaults
} from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';
import { logisticsNodes, logisticsFlows } from './data';

const shapeModelFields: ShapeModelFields = {
    id: 'nodeId',
    content: 'nodeName',
    type: 'nodeType',
    x: 'location.posX',
    y: 'location.posY',
    width: 'dimensions.w',
    height: 'dimensions.h',
    fill: (item: any) => ({ color: item.color })
};

const connectionModelFields: ConnectionModelFields = {
    from: 'sourceNode',
    to: 'targetNode'
};

const connectionDefaults: ConnectionDefaults = {
    stroke: { color: '#4E4E4E', width: 2 },
    endCap: { type: 'ArrowEnd', fill: { color: '#4E4E4E' } }
};

const shapeDefaults: ShapeDefaults = {
    stroke: { color: '#9EC5FE', width: 2 },
    cornerRadius: 5,
    content: { color: '#212529', fontSize: 14 }
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
            shapes={logisticsNodes as any}
            connections={logisticsFlows as any}
            shapeModelFields={shapeModelFields}
            connectionModelFields={connectionModelFields}
            shapeDefaults={shapeDefaults}
            connectionDefaults={connectionDefaults}
            layout={{ type: 'tree', subtype: 'down', horizontalSeparation: 80, verticalSeparation: 60 }}
            zoomMin={0.5}
            zoomMax={1.5}
            zoom={0.8}
            style={{ height: 560 }}
        />
    );
};

export default App;
