import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'start',
        x: 50,
        y: 50,
        content: { text: 'Start' },
        fill: { color: '#C5B3E6' },
        stroke: { color: '#A78CD9', width: 2 }
    },
    {
        id: 'process',
        x: 250,
        y: 50,
        content: { text: 'Process' },
        fill: { color: '#E2D9F3' },
        stroke: { color: '#C4B1E7', width: 2 }
    },
    {
        id: 'end',
        x: 450,
        y: 50,
        content: { text: 'End' },
        fill: { color: '#A3CFBB' },
        stroke: { color: '#83BEA3', width: 2 }
    },
    {
        id: 'source',
        x: 50,
        y: 230,
        content: { text: 'Source' },
        fill: { color: '#FFE69C' },
        stroke: { color: '#FFDA6B', width: 2 }
    },
    {
        id: 'target',
        x: 450,
        y: 230,
        content: { text: 'Target' },
        fill: { color: '#9EEAF9' },
        stroke: { color: '#6FE0F6', width: 2 }
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'start',
        to: 'process',
        content: { text: 'Next', color: '#A78CD9', fontSize: 11 }
    },
    {
        from: 'process',
        to: 'end',
        stroke: { color: '#C4B1E7', width: 2 },
        startCap: { type: 'FilledCircle', fill: { color: '#C4B1E7' }, radius: 4 },
        endCap: { type: 'ArrowEnd', fill: { color: '#C4B1E7' } },
        content: {
            text: 'Complete',
            color: '#1F2937',
            fontSize: 11,
            background: '#E2D9F3',
            padding: 5
        }
    },
    {
        from: { x: 180, y: 175 },
        to: { x: 450, y: 175 },
        stroke: { color: '#83BEA3', width: 2, dashType: 'dash' },
        endCap: { type: 'ArrowEnd', fill: { color: '#83BEA3' } },
        content: { text: 'Coordinate-based', color: '#1F2937', fontSize: 11 }
    },
    {
        from: 'source',
        to: 'target',
        fromConnector: 'right',
        toConnector: 'left',
        stroke: { color: '#FFDA6B', width: 2 },
        endCap: { type: 'ArrowEnd', fill: { color: '#FFDA6B' } },
        content: { text: 'right to left', color: '#1F2937', fontSize: 11 }
    }
];
