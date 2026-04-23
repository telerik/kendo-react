import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'circle1',
        type: 'circle',
        width: 100,
        height: 100,
        x: 50,
        y: 60,
        content: { text: 'Start', color: 'white' },
        fill: { color: '#28a745' }
    },
    {
        id: 'rect1',
        type: 'rectangle',
        width: 120,
        height: 80,
        x: 200,
        y: 70,
        content: { text: 'Process 1', color: 'white' },
        fill: { color: '#007bff' }
    },
    {
        id: 'rect2',
        type: 'rectangle',
        width: 120,
        height: 80,
        x: 350,
        y: 70,
        content: { text: 'Process 2', color: 'white' },
        fill: { color: '#17a2b8' }
    },
    {
        id: 'circle2',
        type: 'circle',
        width: 100,
        height: 100,
        x: 500,
        y: 60,
        content: { text: 'End', color: 'white' },
        fill: { color: '#dc3545' }
    },
    {
        id: 'image1',
        type: 'image',
        width: 80,
        height: 80,
        x: 61,
        y: 200,
        source: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><circle cx="40" cy="40" r="35" fill="%236f42c1"/></svg>',
        content: { text: 'User', color: 'white' }
    }
];

export const connections: ConnectionOptions[] = [
    { from: 'circle1', to: 'rect1', stroke: { width: 2 }, endCap: { type: 'ArrowEnd' } },
    { from: 'rect1', to: 'rect2', stroke: { width: 2 }, endCap: { type: 'ArrowEnd' } },
    { from: 'rect2', to: 'circle2', stroke: { width: 2 }, endCap: { type: 'ArrowEnd' } },
    { from: 'image1', to: 'circle1', stroke: { width: 2 }, endCap: { type: 'ArrowEnd' } }
];
