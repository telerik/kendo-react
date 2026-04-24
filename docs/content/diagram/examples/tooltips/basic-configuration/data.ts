import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: '1',
        content: { text: 'Planning' },
        width: 140,
        height: 70,
        fill: { color: '#84B9F5' },
        stroke: { color: '#5A9FE8', width: 2 },
        tooltipText: 'Define requirements'
    },
    {
        id: '2',
        content: { text: 'Design' },
        width: 140,
        height: 70,
        fill: { color: '#C5A8E8' },
        stroke: { color: '#A77DD4', width: 2 },
        tooltipText: 'Create mockups'
    },
    {
        id: '3',
        content: { text: 'Development' },
        width: 140,
        height: 70,
        fill: { color: '#87E8C3' },
        stroke: { color: '#5DD9AC', width: 2 },
        tooltipText: 'Build features'
    },
    {
        id: '4',
        content: { text: 'Testing' },
        width: 140,
        height: 70,
        fill: { color: '#FFD86E' },
        stroke: { color: '#F5C73D', width: 2 },
        tooltipText: 'Quality assurance'
    },
    {
        id: '5',
        content: { text: 'Deployment' },
        width: 140,
        height: 70,
        fill: { color: '#8FD9AF' },
        stroke: { color: '#63C793', width: 2 },
        tooltipText: 'Go live'
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: '1',
        to: '2',
        tooltipText: 'Design phase',
        stroke: { color: '#4E4E4E', width: 2 }
    },
    {
        from: '2',
        to: '3',
        tooltipText: 'Start coding',
        stroke: { color: '#4E4E4E', width: 2 }
    },
    {
        from: '3',
        to: '4',
        tooltipText: 'Run tests',
        stroke: { color: '#4E4E4E', width: 2 }
    },
    {
        from: '4',
        to: '5',
        tooltipText: 'Deploy app',
        stroke: { color: '#4E4E4E', width: 2 }
    }
];
