import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    { id: 'shape1', x: 50, y: 50, content: { text: 'Shape A' }, fill: { color: '#28a745' } },
    { id: 'shape2', x: 250, y: 50, content: { text: 'Shape B' }, fill: { color: '#007bff' } },
    { id: 'shape3', x: 50, y: 200, content: { text: 'Shape C' }, fill: { color: '#6f42c1' } },
    { id: 'shape4', x: 250, y: 200, content: { text: 'Shape D' }, fill: { color: '#fd7e14' } }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'shape1',
        to: 'shape2',
        stroke: { color: '#28a745', width: 3 },
        content: { text: 'Editable', color: '#28a745' }
    },
    {
        from: 'shape3',
        to: 'shape4',
        editable: { drag: false, remove: false },
        stroke: { color: '#dc3545', width: 3 },
        content: { text: 'Non-editable', color: '#dc3545' }
    }
];
