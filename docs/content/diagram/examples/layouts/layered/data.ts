import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'start',
        content: {
            text: 'Start',
            color: 'white'
        },
        fill: {
            color: '#28a745'
        },
        width: 100,
        height: 60
    },
    {
        id: 'input1',
        content: {
            text: 'Input Data',
            color: 'white'
        },
        fill: {
            color: '#007bff'
        },
        width: 100,
        height: 60
    },
    {
        id: 'input2',
        content: {
            text: 'Input Config',
            color: 'white'
        },
        fill: {
            color: '#007bff'
        },
        width: 100,
        height: 60
    },
    {
        id: 'process1',
        content: {
            text: 'Validate',
            color: 'white'
        },
        fill: {
            color: '#ffc107'
        },
        width: 100,
        height: 60
    },
    {
        id: 'process2',
        content: {
            text: 'Transform',
            color: 'white'
        },
        fill: {
            color: '#ffc107'
        },
        width: 100,
        height: 60
    },
    {
        id: 'output1',
        content: {
            text: 'Save Data',
            color: 'white'
        },
        fill: {
            color: '#17a2b8'
        },
        width: 100,
        height: 60
    },
    {
        id: 'output2',
        content: {
            text: 'Send Report',
            color: 'white'
        },
        fill: {
            color: '#17a2b8'
        },
        width: 100,
        height: 60
    },
    {
        id: 'end',
        content: {
            text: 'End',
            color: 'white'
        },
        fill: {
            color: '#dc3545'
        },
        width: 100,
        height: 60
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'start',
        to: 'input1',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'start',
        to: 'input2',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'input1',
        to: 'process1',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'input2',
        to: 'process1',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'process1',
        to: 'process2',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'process2',
        to: 'output1',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'process2',
        to: 'output2',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'output1',
        to: 'end',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'output2',
        to: 'end',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    }
];
