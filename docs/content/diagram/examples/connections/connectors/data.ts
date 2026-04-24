import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const uiConnectors = [
    {
        name: 'RightTop',
        description: 'Right Top',
        position: (shape: any) => {
            const bounds = shape.bounds();
            const point = bounds.right();
            point.y = bounds.y + bounds.height * 0.3;
            return point;
        }
    },
    {
        name: 'RightBottom',
        description: 'Right Bottom',
        position: (shape: any) => {
            const bounds = shape.bounds();
            const point = bounds.right();
            point.y = bounds.y + bounds.height * 0.7;
            return point;
        }
    }
];

export const logicConnectors = [
    { name: 'Left', description: 'Left', position: (shape: any) => shape.bounds().left() },
    { name: 'Right', description: 'Right', position: (shape: any) => shape.bounds().right() },
    { name: 'Bottom', description: 'Bottom', position: (shape: any) => shape.bounds().bottom() }
];

export const dataConnectors = [
    { name: 'Left', description: 'Left', position: (shape: any) => shape.bounds().left() },
    { name: 'Top', description: 'Top', position: (shape: any) => shape.bounds().top() },
    { name: 'Right', description: 'Right', position: (shape: any) => shape.bounds().right() }
];

export const outputConnectors = [
    {
        name: 'TopLeft',
        description: 'Top Left',
        position: (shape: any) => {
            const bounds = shape.bounds();
            const point = bounds.left();
            point.y = bounds.y + bounds.height * 0.3;
            return point;
        }
    },
    {
        name: 'BottomLeft',
        description: 'Bottom Left',
        position: (shape: any) => {
            const bounds = shape.bounds();
            const point = bounds.left();
            point.y = bounds.y + bounds.height * 0.7;
            return point;
        }
    }
];

export const shapes: ShapeOptions[] = [
    {
        id: 'ui',
        x: 60,
        y: 180,
        content: { text: 'UI Layer' },
        fill: { color: '#5c6bc0' },
        stroke: { color: '#3949ab', width: 2 },
        connectors: uiConnectors
    },
    {
        id: 'logic',
        x: 360,
        y: 80,
        content: { text: 'Business Logic' },
        fill: { color: '#00897b' },
        stroke: { color: '#00695c', width: 2 },
        connectors: logicConnectors
    },
    {
        id: 'data',
        x: 360,
        y: 290,
        content: { text: 'Data Access' },
        fill: { color: '#e53935' },
        stroke: { color: '#b71c1c', width: 2 },
        connectors: dataConnectors
    },
    {
        id: 'output',
        x: 660,
        y: 180,
        content: { text: 'Output / API' },
        fill: { color: '#f4511e' },
        stroke: { color: '#bf360c', width: 2 },
        connectors: outputConnectors
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'ui',
        to: 'logic',
        fromConnector: 'RightTop',
        toConnector: 'Left',
        type: 'cascading',
        stroke: { color: '#3949ab', width: 2 },
        endCap: { type: 'ArrowEnd', fill: { color: '#3949ab' } },
        content: {
            text: 'RightTop to Left',
            fontSize: 11,
            color: '#3949ab',
            position: { horizontal: 'left' }
        }
    },
    {
        from: 'ui',
        to: 'data',
        fromConnector: 'RightBottom',
        toConnector: 'Left',
        type: 'cascading',
        stroke: { color: '#3949ab', width: 2 },
        endCap: { type: 'ArrowEnd', fill: { color: '#3949ab' } },
        content: {
            text: 'RightBottom to Left',
            fontSize: 11,
            color: '#3949ab',
            position: { horizontal: 'left' }
        }
    },
    {
        from: 'logic',
        to: 'output',
        fromConnector: 'Right',
        toConnector: 'TopLeft',
        type: 'cascading',
        stroke: { color: '#00695c', width: 2 },
        endCap: { type: 'ArrowEnd', fill: { color: '#00695c' } },
        content: { text: 'Right to TopLeft', fontSize: 11, color: '#00695c' }
    },
    {
        from: 'data',
        to: 'output',
        fromConnector: 'Right',
        toConnector: 'BottomLeft',
        type: 'cascading',
        stroke: { color: '#b71c1c', width: 2 },
        endCap: { type: 'ArrowEnd', fill: { color: '#b71c1c' } },
        content: { text: 'Right to BottomLeft', fontSize: 11, color: '#b71c1c' }
    },
    {
        from: 'logic',
        to: 'data',
        fromConnector: 'Bottom',
        toConnector: 'Top',
        type: 'polyline',
        stroke: { color: '#888', width: 2, dashType: 'dash' },
        endCap: { type: 'ArrowEnd', fill: { color: '#888' } },
        content: { text: 'Bottom to Top', fontSize: 11, color: '#555' }
    }
];
