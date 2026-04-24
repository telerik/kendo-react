import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'ceo',
        content: { text: 'CEO', fontSize: 16, fontWeight: '600' },
        width: 140,
        height: 70,
        fill: { color: '#84B9F5' },
        stroke: { color: '#5A9FE8', width: 2 },
        tooltipText: 'CEO Info',
        dataItem: {
            name: 'Jane Simons',
            title: 'Chief Executive Officer',
            department: 'Executive',
            email: 'jane.simons@company.com'
        }
    },
    {
        id: 'gm',
        content: { text: 'General Manager', fontSize: 14 },
        width: 140,
        height: 70,
        fill: { color: '#C5A8E8' },
        stroke: { color: '#A77DD4', width: 2 },
        tooltipText: 'GM Info',
        dataItem: {
            name: 'Liam Turner',
            title: 'General Manager',
            department: 'Operations',
            email: 'liam.turner@company.com'
        }
    },
    {
        id: 'hr',
        content: { text: 'HR Director', fontSize: 14 },
        width: 140,
        height: 70,
        fill: { color: '#87E8C3' },
        stroke: { color: '#5DD9AC', width: 2 },
        tooltipText: 'HR Info',
        dataItem: {
            name: 'Amelia Carter',
            title: 'HR Director',
            department: 'Human Resources',
            email: 'amelia.carter@company.com'
        }
    },
    {
        id: 'ux',
        content: { text: 'UX Manager', fontSize: 14 },
        width: 140,
        height: 70,
        fill: { color: '#FFD86E' },
        stroke: { color: '#F5C73D', width: 2 },
        tooltipText: 'UX Info',
        dataItem: {
            name: 'Noah Sullivan',
            title: 'UX Manager',
            department: 'Design',
            email: 'noah.sullivan@company.com'
        }
    },
    {
        id: 'marketing',
        content: { text: 'Marketing Manager', fontSize: 12 },
        width: 130,
        height: 65,
        fill: { color: '#FFB6C1' },
        stroke: { color: '#FF69B4', width: 2 },
        tooltipText: 'Marketing Info',
        dataItem: {
            name: 'Zara Mitchell',
            title: 'Marketing Manager',
            department: 'Marketing',
            email: 'zara.mitchell@company.com'
        }
    },
    {
        id: 'hr-mgr',
        content: { text: 'HR Manager', fontSize: 12 },
        width: 130,
        height: 65,
        fill: { color: '#C1FFC1' },
        stroke: { color: '#90EE90', width: 2 },
        tooltipText: 'HR Mgr Info',
        dataItem: {
            name: 'Kapoor Chandra',
            title: 'HR Manager',
            department: 'Human Resources',
            email: 'kapoor.chandra@company.com'
        }
    },
    {
        id: 'design',
        content: { text: 'Design Lead', fontSize: 12 },
        width: 130,
        height: 65,
        fill: { color: '#DDA0DD' },
        stroke: { color: '#BA55D3', width: 2 },
        tooltipText: 'Design Lead Info',
        dataItem: {
            name: 'Isabella Hayes',
            title: 'UX/UI Design Lead',
            department: 'Design',
            email: 'isabella.hayes@company.com'
        }
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'ceo',
        to: 'gm',
        tooltipText: 'Direct Report',
        dataItem: { relationship: 'Reports to CEO' }
    },
    {
        from: 'gm',
        to: 'hr',
        tooltipText: 'Direct Report',
        dataItem: { relationship: 'Reports to General Manager' }
    },
    {
        from: 'gm',
        to: 'ux',
        tooltipText: 'Direct Report',
        dataItem: { relationship: 'Reports to General Manager' }
    },
    {
        from: 'hr',
        to: 'marketing',
        tooltipText: 'Direct Report',
        dataItem: { relationship: 'Reports to HR Director' }
    },
    {
        from: 'hr',
        to: 'hr-mgr',
        tooltipText: 'Direct Report',
        dataItem: { relationship: 'Reports to HR Director' }
    },
    {
        from: 'ux',
        to: 'design',
        tooltipText: 'Direct Report',
        dataItem: { relationship: 'Reports to UX Manager' }
    }
];
