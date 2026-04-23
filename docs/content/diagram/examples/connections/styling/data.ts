import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    { id: 'source1', x: 50, y: 30, content: { text: 'Source A' }, fill: { color: '#0d6efd' } },
    { id: 'source2', x: 50, y: 130, content: { text: 'Source B' }, fill: { color: '#198754' } },
    { id: 'source3', x: 50, y: 230, content: { text: 'Source C' }, fill: { color: '#fd7e14' } },
    { id: 'target1', x: 450, y: 30, content: { text: 'Target A' }, fill: { color: '#6c757d' } },
    { id: 'target2', x: 450, y: 130, content: { text: 'Target B' }, fill: { color: '#6c757d' } },
    { id: 'target3', x: 450, y: 230, content: { text: 'Target C' }, fill: { color: '#6c757d' } }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'source1',
        to: 'target1',
        content: {
            text: 'Standard',
            color: '#0d6efd',
            fontSize: 12,
            fontFamily: 'Arial'
        },
        stroke: {
            color: '#0d6efd',
            width: 2
        },
        endCap: {
            type: 'ArrowEnd',
            fill: { color: '#0d6efd' },
            stroke: { color: '#0a58ca', width: 1 }
        },
        selection: {
            handles: {
                fill: { color: '#0d6efd' },
                stroke: { color: '#0a58ca' },
                width: 8,
                height: 8
            }
        }
    },
    {
        from: 'source2',
        to: 'target2',
        content: {
            text: 'Thick Line',
            color: '#198754',
            fontSize: 14,
            fontWeight: 'bold'
        },
        stroke: {
            color: '#198754',
            width: 4
        },
        endCap: {
            type: 'FilledCircle',
            fill: { color: '#198754' },
            stroke: { color: '#146c43', width: 2 }
        },
        selection: {
            handles: {
                fill: { color: '#198754' },
                stroke: { color: '#146c43' },
                width: 10,
                height: 10
            }
        }
    },
    {
        from: 'source3',
        to: 'target3',
        content: {
            text: 'Dashed',
            color: '#fd7e14',
            fontSize: 12,
            fontStyle: 'italic'
        },
        stroke: {
            color: '#fd7e14',
            width: 3,
            dashType: 'dash'
        },
        startCap: {
            type: 'FilledCircle',
            fill: { color: '#fd7e14' },
            stroke: { color: '#dc6606', width: 1 }
        },
        endCap: {
            type: 'ArrowEnd',
            fill: { color: '#fd7e14' },
            stroke: { color: '#dc6606', width: 1 }
        },
        selection: {
            handles: {
                fill: { color: '#fd7e14' },
                stroke: { color: '#dc6606' }
            }
        }
    },
    {
        from: 'source1',
        to: 'target2',
        fromConnector: 'bottom',
        content: {
            text: 'Dotted',
            color: '#6f42c1',
            fontSize: 11
        },
        stroke: {
            color: '#6f42c1',
            width: 2,
            dashType: 'dot'
        },
        endCap: {
            type: 'ArrowEnd',
            fill: { color: '#6f42c1' },
            stroke: { color: '#59359a', width: 1 }
        },
        selection: {
            handles: {
                fill: '#6f42c1',
                stroke: { color: '#59359a' }
            }
        }
    }
];
