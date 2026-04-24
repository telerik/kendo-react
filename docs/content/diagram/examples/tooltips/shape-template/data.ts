import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'ceo',
        content: { text: 'CEO', fontSize: 16, fontWeight: '600' },
        width: 140,
        height: 70,
        fill: { color: '#84B9F5' },
        stroke: { color: '#5A9FE8', width: 2 },
        tooltipText: 'tooltip',
        dataItem: {
            name: 'Sarah Mitchell',
            title: 'Chief Executive Officer',
            email: 'sarah.mitchell@company.com'
        }
    },
    {
        id: 'cto',
        content: { text: 'CTO', fontSize: 16, fontWeight: '600' },
        width: 140,
        height: 70,
        fill: { color: '#C5A8E8' },
        stroke: { color: '#A77DD4', width: 2 },
        tooltipText: 'tooltip',
        dataItem: {
            name: 'James Chen',
            title: 'Chief Technology Officer',
            email: 'james.chen@company.com'
        }
    },
    {
        id: 'coo',
        content: { text: 'COO', fontSize: 16, fontWeight: '600' },
        width: 140,
        height: 70,
        fill: { color: '#87E8C3' },
        stroke: { color: '#5DD9AC', width: 2 },
        tooltipText: 'tooltip',
        dataItem: {
            name: 'Maria Rodriguez',
            title: 'Chief Operating Officer',
            email: 'maria.rodriguez@company.com'
        }
    },
    {
        id: 'dev-manager',
        content: { text: 'Dev Manager', fontSize: 14 },
        width: 130,
        height: 70,
        fill: { color: '#8FD9AF' },
        stroke: { color: '#63C793', width: 2 },
        tooltipText: 'tooltip',
        dataItem: {
            name: 'Alex Kumar',
            title: 'Development Manager',
            email: 'alex.kumar@company.com'
        }
    },
    {
        id: 'ops-manager',
        content: { text: 'Ops Manager', fontSize: 14 },
        width: 130,
        height: 70,
        fill: { color: '#FFD86E' },
        stroke: { color: '#F5C73D', width: 2 },
        tooltipText: 'tooltip',
        dataItem: {
            name: 'Emily Watson',
            title: 'Operations Manager',
            email: 'emily.watson@company.com'
        }
    }
];

export const connections: ConnectionOptions[] = [
    { from: 'ceo', to: 'cto', stroke: { color: '#4E4E4E', width: 2 } },
    { from: 'ceo', to: 'coo', stroke: { color: '#4E4E4E', width: 2 } },
    { from: 'cto', to: 'dev-manager', stroke: { color: '#4E4E4E', width: 2 } },
    { from: 'coo', to: 'ops-manager', stroke: { color: '#4E4E4E', width: 2 } }
];
