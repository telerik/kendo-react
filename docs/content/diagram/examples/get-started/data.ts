import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'shape1',
        content: { text: 'Start', color: 'white' },
        fill: { color: '#28a745' }
    },
    {
        id: 'shape2',
        content: { text: 'Process', color: 'white' },
        fill: { color: '#007bff' }
    },
    {
        id: 'shape3',
        content: { text: 'End', color: 'white' },
        fill: { color: '#dc3545' }
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'shape1',
        to: 'shape2',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'shape2',
        to: 'shape3',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    }
];
