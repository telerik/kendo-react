import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'start',
        type: 'circle',
        width: 80,
        height: 80,
        x: 100,
        y: 50,
        fill: { color: '#28a745' },
        content: { text: 'Start', color: 'white' }
    },
    {
        id: 'process',
        type: 'rectangle',
        width: 120,
        height: 60,
        x: 80,
        y: 180,
        fill: { color: '#007bff' },
        content: { text: 'Process', color: 'white' }
    },
    {
        id: 'end',
        type: 'circle',
        width: 80,
        height: 80,
        x: 100,
        y: 290,
        fill: { color: '#dc3545' },
        content: { text: 'End', color: 'white' }
    }
];

export const connections: ConnectionOptions[] = [
    { from: 'start', to: 'process' },
    { from: 'process', to: 'end' }
];
