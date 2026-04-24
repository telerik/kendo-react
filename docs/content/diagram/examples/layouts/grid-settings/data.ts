import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'shape1',
        content: {
            text: 'Shape 1'
        },
        fill: {
            color: '#28a745'
        },
        width: 80,
        height: 60
    },
    {
        id: 'shape2',
        content: {
            text: 'Shape 2'
        },
        fill: {
            color: '#007bff'
        },
        width: 80,
        height: 60
    },
    {
        id: 'shape3',
        content: {
            text: 'Shape 3'
        },
        fill: {
            color: '#007bff'
        },
        width: 80,
        height: 60
    },
    {
        id: 'shape4',
        content: {
            text: 'Shape 4'
        },
        fill: {
            color: '#dc3545'
        },
        width: 80,
        height: 60
    },
    {
        id: 'shape5',
        content: {
            text: 'Shape 5'
        },
        fill: {
            color: '#6f42c1'
        },
        width: 80,
        height: 60
    },
    {
        id: 'shape6',
        content: {
            text: 'Shape 6'
        },
        fill: {
            color: '#6f42c1'
        },
        width: 80,
        height: 60
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
        from: 'shape1',
        to: 'shape3',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'shape4',
        to: 'shape5',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'shape4',
        to: 'shape6',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    }
];
