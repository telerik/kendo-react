import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'shape1',
        type: 'rectangle',
        width: 200,
        height: 50,
        x: 50,
        y: 50,
        content: { text: 'Rectangle Shape' }
    },
    {
        id: 'shape2',
        type: 'circle',
        width: 100,
        height: 100,
        x: 300,
        y: 25,
        content: { text: 'Circle' }
    },
    {
        id: 'shape3',
        type: 'rectangle',
        width: 150,
        height: 80,
        x: 100,
        y: 150,
        content: { text: 'Custom Size\n150x80' }
    },
    {
        id: 'shape4',
        type: 'rectangle',
        x: 320,
        y: 170,
        content: { text: 'Default Size' }
    }
];

export const connections: ConnectionOptions[] = [
    { from: 'shape1', to: 'shape2' },
    { from: 'shape1', to: 'shape3' },
    { from: 'shape2', to: 'shape4' }
];
