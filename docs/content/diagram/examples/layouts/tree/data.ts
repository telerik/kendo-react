import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'ceo',
        content: {
            text: 'CEO',
            color: 'white'
        },
        fill: {
            color: '#1f77b4'
        },
        width: 100,
        height: 60
    },
    {
        id: 'cto',
        content: {
            text: 'CTO',
            color: 'white'
        },
        fill: {
            color: '#ff7f0e'
        },
        width: 100,
        height: 60
    },
    {
        id: 'cfo',
        content: {
            text: 'CFO',
            color: 'white'
        },
        fill: {
            color: '#2ca02c'
        },
        width: 100,
        height: 60
    },
    {
        id: 'cmo',
        content: {
            text: 'CMO',
            color: 'white'
        },
        fill: {
            color: '#d62728'
        },
        width: 100,
        height: 60
    },
    {
        id: 'dev1',
        content: {
            text: 'Senior Dev',
            color: 'white'
        },
        fill: {
            color: '#9467bd'
        },
        width: 100,
        height: 60
    },
    {
        id: 'dev2',
        content: {
            text: 'Junior Dev',
            color: 'white'
        },
        fill: {
            color: '#8c564b'
        },
        width: 100,
        height: 60
    },
    {
        id: 'accountant',
        content: {
            text: 'Accountant',
            color: 'white'
        },
        fill: {
            color: '#e377c2'
        },
        width: 100,
        height: 60
    },
    {
        id: 'analyst',
        content: {
            text: 'Analyst',
            color: 'white'
        },
        fill: {
            color: '#7f7f7f'
        },
        width: 100,
        height: 60
    },
    {
        id: 'designer',
        content: {
            text: 'Designer',
            color: 'white'
        },
        fill: {
            color: '#bcbd22'
        },
        width: 100,
        height: 60
    },
    {
        id: 'marketer',
        content: {
            text: 'Marketer',
            color: 'white'
        },
        fill: {
            color: '#17becf'
        },
        width: 100,
        height: 60
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'ceo',
        to: 'cto',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'ceo',
        to: 'cfo',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'ceo',
        to: 'cmo',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'cto',
        to: 'dev1',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'cto',
        to: 'dev2',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'cfo',
        to: 'accountant',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'cfo',
        to: 'analyst',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'cmo',
        to: 'designer',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    },
    {
        from: 'cmo',
        to: 'marketer',
        stroke: { color: '#666', width: 2 },
        endCap: { type: 'ArrowEnd' }
    }
];
