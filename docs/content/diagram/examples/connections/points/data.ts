import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    { id: 'shape1', x: 50, y: 50, content: { text: 'Shape A' }, fill: { color: '#0d6efd' } },
    { id: 'shape2', x: 500, y: 50, content: { text: 'Shape B' }, fill: { color: '#6610f2' } },
    { id: 'shape3', x: 50, y: 350, content: { text: 'Shape C' }, fill: { color: '#198754' } },
    { id: 'shape4', x: 500, y: 350, content: { text: 'Shape D' }, fill: { color: '#0dcaf0' } }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'shape1',
        to: 'shape2',
        type: 'polyline',
        stroke: { color: '#6c757d', width: 2, dashType: 'dash' },
        content: { text: 'Direct', color: '#6c757d', fontSize: 11 }
    },
    {
        from: 'shape1',
        to: 'shape3',
        type: 'polyline',
        points: [
            { x: 180, y: 150 },
            { x: 180, y: 300 }
        ],
        stroke: { color: '#0d6efd', width: 3 },
        content: {
            text: '2 Points',
            color: 'white',
            fontSize: 11,
            background: '#0d6efd',
            padding: 5
        }
    },
    {
        from: 'shape2',
        to: 'shape4',
        type: 'polyline',
        points: [
            { x: 560, y: 150 },
            { x: 400, y: 150 },
            { x: 400, y: 300 },
            { x: 560, y: 300 }
        ],
        stroke: { color: '#6610f2', width: 3 },
        content: {
            text: '4 Points',
            color: 'white',
            fontSize: 11,
            fontWeight: 'bold',
            background: '#6610f2',
            padding: 5
        }
    },
    {
        from: 'shape3',
        to: 'shape4',
        type: 'polyline',
        points: [
            { x: 200, y: 385 },
            { x: 300, y: 250 },
            { x: 420, y: 385 }
        ],
        stroke: { color: '#198754', width: 3 },
        content: {
            text: '3 Points',
            color: 'white',
            fontSize: 11,
            fontStyle: 'italic',
            background: '#198754',
            padding: 5
        }
    }
];
