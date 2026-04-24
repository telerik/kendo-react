import * as React from 'react';
import { Diagram, ShapeDefaults } from '@progress/kendo-react-diagram';
import { ShapeDataItem, shapes } from './data';
import { Group, TextBlock, Image, Rectangle, Path, Diagram as DiagramWidget } from '@progress/kendo-diagram-common';

interface ShapeVisualData {
    dataItem: { dataItem: ShapeDataItem };
}

const visualTemplate = (options: ShapeVisualData): Group => {
    const g = new Group();
    const dataItem = options.dataItem.dataItem;

    if (dataItem.type === 'employee') {
        g.append(
            new Rectangle({
                width: 250,
                height: 100,
                stroke: { width: 2, color: dataItem.strokeColor || '#007bff' },
                fill: { color: dataItem.backgroundColor || '#f8f9fa' },
                cornerRadius: 8
            })
        );

        if (dataItem.image) {
            g.append(
                new Image({
                    source: dataItem.image,
                    x: 10,
                    y: 15,
                    width: 70,
                    height: 70
                })
            );
        }

        g.append(
            new TextBlock({
                text: dataItem.name || '',
                x: 90,
                y: 25,
                fill: '#212529',
                fontSize: 16,
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold'
            })
        );

        g.append(
            new TextBlock({
                text: dataItem.role || '',
                x: 90,
                y: 50,
                fill: '#6c757d',
                fontSize: 14,
                fontFamily: 'Arial, sans-serif'
            })
        );

        if (dataItem.department) {
            g.append(
                new TextBlock({
                    text: dataItem.department,
                    x: 90,
                    y: 72,
                    fill: '#28a745',
                    fontSize: 12,
                    fontFamily: 'Arial, sans-serif',
                    fontStyle: 'italic'
                })
            );
        }
    } else if (dataItem.type === 'star') {
        g.append(
            new Path({
                data: 'M 0 -20 L 6 -6 L 20 -6 L 10 2 L 16 16 L 0 8 L -16 16 L -10 2 L -20 -6 L -6 -6 Z',
                stroke: { width: 2, color: dataItem.strokeColor || '#ffc107' },
                fill: { color: dataItem.backgroundColor || '#fff8e1' },
                x: 20,
                y: 20
            })
        );
    } else if (dataItem.type === 'arrow') {
        g.append(
            new Path({
                data: 'M 0 -15 L 15 0 L 5 0 L 5 20 L -5 20 L -5 0 L -15 0 Z',
                stroke: { width: 2, color: dataItem.strokeColor || '#2196f3' },
                fill: { color: dataItem.backgroundColor || '#e3f2fd' },
                x: 15,
                y: 20
            })
        );
    }

    return g;
};

const shapeDefaults: ShapeDefaults = { visual: visualTemplate };

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);

    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    return <Diagram ref={diagramRef} shapes={shapes} shapeDefaults={shapeDefaults} style={{ height: 300 }} />;
};

export default App;
