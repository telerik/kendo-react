import * as React from 'react';
import { Diagram, ShapeOptions, ConnectionOptions, ShapeDefaults } from '@progress/kendo-react-diagram';

const shapeDefaults: ShapeDefaults = {
    width: 210,
    height: 80,
    content: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Arial'
    },
    stroke: {
        color: '#333',
        width: 2
    },
    editable: {
        connect: true
    }
};

const shapes: ShapeOptions[] = [
    {
        id: 'shape1',
        type: 'rectangle',
        x: 50,
        y: 50,
        content: {
            text: 'Default Settings (Connect Only)'
        },
        fill: {
            color: '#007bff'
        }
    },
    {
        id: 'shape2',
        type: 'rectangle',
        x: 280,
        y: 50,
        content: {
            text: 'Default Settings (Connect Only)'
        },
        fill: {
            color: '#007bff'
        }
    },
    {
        id: 'shape3',
        type: 'rectangle',
        x: 50,
        y: 200,
        content: {
            text: 'No Connect (Override)'
        },
        fill: {
            color: '#dc3545'
        },
        editable: {
            connect: false
        }
    },
    {
        id: 'shape4',
        type: 'rectangle',
        x: 280,
        y: 200,
        content: {
            text: 'Connect Enabled (Override)'
        },
        fill: {
            color: '#28a745'
        },
        editable: {
            connect: true
        }
    },
    {
        id: 'shape5',
        type: 'rectangle',
        x: 165,
        y: 320,
        content: {
            text: 'Non-Editable (Locked)'
        },
        fill: {
            color: '#6c757d'
        },
        editable: false
    }
];

const connections: ConnectionOptions[] = [
    {
        from: 'shape1',
        to: 'shape2',
        endCap: {
            type: 'ArrowEnd'
        }
    }
];

const App = () => (
    <Diagram shapes={shapes} connections={connections} shapeDefaults={shapeDefaults} style={{ height: 400 }} />
);

export default App;
