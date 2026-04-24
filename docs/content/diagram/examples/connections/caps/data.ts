import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    { id: 'source1', x: 50, y: 30, content: { text: 'Source', color: 'white' }, fill: { color: '#6c757d' } },
    { id: 'target1', x: 450, y: 30, content: { text: 'Arrow End', color: 'white' }, fill: { color: '#0d6efd' } },
    { id: 'source2', x: 50, y: 130, content: { text: 'Source', color: 'white' }, fill: { color: '#6c757d' } },
    { id: 'target2', x: 450, y: 130, content: { text: 'Filled Circle', color: 'white' }, fill: { color: '#198754' } },
    { id: 'source3', x: 50, y: 230, content: { text: 'Source', color: 'white' }, fill: { color: '#6c757d' } },
    { id: 'target3', x: 450, y: 230, content: { text: 'No Caps', color: 'white' }, fill: { color: '#ffc107' } },
    { id: 'source4', x: 50, y: 330, content: { text: 'Source', color: 'white' }, fill: { color: '#6c757d' } },
    { id: 'target4', x: 450, y: 330, content: { text: 'Both Arrows', color: 'white' }, fill: { color: '#6f42c1' } }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'source1',
        to: 'target1',
        stroke: { color: '#0d6efd', width: 2 },
        endCap: {
            type: 'ArrowEnd',
            fill: { color: '#0d6efd' },
            stroke: { color: '#0a58ca', width: 1 }
        }
    },
    {
        from: 'source2',
        to: 'target2',
        stroke: { color: '#198754', width: 2 },
        endCap: {
            type: 'FilledCircle',
            fill: { color: '#198754' },
            stroke: { color: '#146c43', width: 2 },
            radius: 5
        }
    },
    {
        from: 'source3',
        to: 'target3',
        stroke: { color: '#ffc107', width: 2 },
        startCap: { type: 'none' },
        endCap: { type: 'none' }
    },
    {
        from: 'source4',
        to: 'target4',
        stroke: { color: '#6f42c1', width: 2 },
        startCap: {
            type: 'ArrowStart',
            fill: { color: '#6f42c1' },
            stroke: { color: '#59359a', width: 1 }
        },
        endCap: {
            type: 'ArrowEnd',
            fill: { color: '#6f42c1' },
            stroke: { color: '#59359a', width: 1 }
        }
    }
];
