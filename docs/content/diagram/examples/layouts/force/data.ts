import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'center',
        content: {
            text: 'Hub',
            color: 'white'
        },
        fill: {
            color: '#dc3545'
        },
        width: 80,
        height: 80
    },
    {
        id: 'node1',
        content: {
            text: 'Node A',
            color: 'white'
        },
        fill: {
            color: '#007bff'
        },
        width: 70,
        height: 70
    },
    {
        id: 'node2',
        content: {
            text: 'Node B',
            color: 'white'
        },
        fill: {
            color: '#28a745'
        },
        width: 70,
        height: 70
    },
    {
        id: 'node3',
        content: {
            text: 'Node C',
            color: 'white'
        },
        fill: {
            color: '#ffc107'
        },
        width: 70,
        height: 70
    },
    {
        id: 'node4',
        content: {
            text: 'Node D',
            color: 'white'
        },
        fill: {
            color: '#17a2b8'
        },
        width: 70,
        height: 70
    },
    {
        id: 'node5',
        content: {
            text: 'Node E',
            color: 'white'
        },
        fill: {
            color: '#6f42c1'
        },
        width: 70,
        height: 70
    },
    {
        id: 'sub1',
        content: {
            text: 'Sub 1',
            color: 'white'
        },
        fill: {
            color: '#fd7e14'
        },
        width: 60,
        height: 60
    },
    {
        id: 'sub2',
        content: {
            text: 'Sub 2',
            color: 'white'
        },
        fill: {
            color: '#20c997'
        },
        width: 60,
        height: 60
    },
    {
        id: 'isolated',
        content: {
            text: 'Isolated',
            color: 'white'
        },
        fill: {
            color: '#6c757d'
        },
        width: 60,
        height: 60
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'center',
        to: 'node1',
        stroke: { color: '#666', width: 2 }
    },
    {
        from: 'center',
        to: 'node2',
        stroke: { color: '#666', width: 2 }
    },
    {
        from: 'center',
        to: 'node3',
        stroke: { color: '#666', width: 2 }
    },
    {
        from: 'center',
        to: 'node4',
        stroke: { color: '#666', width: 2 }
    },
    {
        from: 'center',
        to: 'node5',
        stroke: { color: '#666', width: 2 }
    },
    {
        from: 'node2',
        to: 'sub1',
        stroke: { color: '#666', width: 1 }
    },
    {
        from: 'node3',
        to: 'sub2',
        stroke: { color: '#666', width: 1 }
    },
    {
        from: 'node1',
        to: 'node4',
        stroke: { color: '#666', width: 1 }
    }
];
