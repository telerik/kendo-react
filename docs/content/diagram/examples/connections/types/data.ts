import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    { id: 'cascade-root', x: 80, y: 30, content: { text: 'Root' }, fill: { color: '#0d6efd' } },
    { id: 'cascade-child1', x: 30, y: 150, content: { text: 'Child 1' }, fill: { color: '#6610f2' } },
    { id: 'cascade-child2', x: 180, y: 150, content: { text: 'Child 2' }, fill: { color: '#6610f2' } },
    { id: 'cascade-grandchild', x: 80, y: 270, content: { text: 'Grandchild' }, fill: { color: '#6f42c1' } },
    { id: 'poly-start', x: 420, y: 30, content: { text: 'Start' }, fill: { color: '#198754' } },
    { id: 'poly-middle', x: 570, y: 150, content: { text: 'Middle' }, fill: { color: '#20c997' } },
    { id: 'poly-end', x: 420, y: 270, content: { text: 'End' }, fill: { color: '#0dcaf0' } }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'cascade-root',
        to: 'cascade-child1',
        type: 'cascading',
        stroke: { color: '#0d6efd', width: 2 },
        content: { text: 'Cascading', color: '#0d6efd', fontSize: 11 }
    },
    {
        from: 'cascade-root',
        to: 'cascade-child2',
        type: 'cascading',
        stroke: { color: '#0d6efd', width: 2 }
    },
    {
        from: 'cascade-child2',
        to: 'cascade-grandchild',
        type: 'cascading',
        stroke: { color: '#6610f2', width: 2 }
    },
    {
        from: 'poly-start',
        to: 'poly-middle',
        type: 'polyline',
        stroke: { color: '#198754', width: 2 },
        content: { text: 'Polyline', color: '#198754', fontSize: 11 }
    },
    {
        from: 'poly-middle',
        to: 'poly-end',
        type: 'polyline',
        stroke: { color: '#20c997', width: 2 }
    },
    {
        from: 'poly-end',
        to: 'poly-start',
        type: 'polyline',
        stroke: { color: '#0dcaf0', width: 2, dashType: 'dash' }
    }
];
