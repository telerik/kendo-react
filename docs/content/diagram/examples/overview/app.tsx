import * as React from 'react';
import { Diagram, ShapeDefaults, DiagramLayout, DiagramEditable } from '@progress/kendo-react-diagram';
import { Group, TextBlock, Image, Process, Diagram as DiagramWidget } from '@progress/kendo-diagram-common';

import { EmployeeDataItem, shapes, connections } from './data';

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
    g.append(
        new Image({
            source: dataItem.image,
            x: 16,
            y: 12,
            width: 68,
            height: 68
        })
    );

    return g;
};

const shapeDefaults: ShapeDefaults = { visual: visualTemplate };

const editable: boolean | DiagramEditable = true;

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
            shapes={shapes}
            connections={connections}
            editable={editable}
            layout={layout}
            zoom={0.8}
            zoomMin={0.5}
            zoomMax={1.5}
            style={{ height: 430 }}
        />
    );
};

export default App;
