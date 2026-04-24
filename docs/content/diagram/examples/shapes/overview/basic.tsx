import * as React from 'react';
import { Diagram, ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';

const shapes: ShapeOptions[] = [
    {
        id: 'shape1',
        type: 'rectangle',
        width: 200,
        height: 50,
        x: 50,
        y: 50,
        content: {
            text: 'Rectangle Shape'
        }
    },
    {
        id: 'shape2',
        type: 'circle',
        width: 100,
        height: 100,
        x: 300,
        y: 25,
        content: {
            text: 'Circle'
        }
    },
    {
        id: 'shape3',
        type: 'rectangle',
        width: 150,
        height: 80,
        x: 100,
        y: 150,
        content: {
            text: 'Custom Size\n150x80'
        }
    },
    {
        id: 'shape4',
        type: 'rectangle',
        x: 320,
        y: 170,
        content: {
            text: 'Default Size'
        }
    }
];

const connections: ConnectionOptions[] = [
    {
        from: 'shape1',
        to: 'shape2'
    },
    {
        from: 'shape1',
        to: 'shape3'
    },
    {
        from: 'shape2',
        to: 'shape4'
    }
];

const App = () => {
    const diagramRef = React.useRef<DiagramWidget>(null);

    React.useEffect(() => {
        if (diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, []);

    return <Diagram ref={diagramRef} shapes={shapes} connections={connections} style={{ height: 300 }} />;
};

export default App;
