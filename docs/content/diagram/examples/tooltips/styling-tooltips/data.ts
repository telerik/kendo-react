import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'ceo',
        content: { text: 'CEO', color: '#000000', fontSize: 18, fontWeight: 'bold' },
        x: 320,
        y: 30,
        width: 160,
        height: 80,
        fill: { color: '#CFE2FF' },
        stroke: { color: '#9EC5FE', width: 3 },
        tooltip: { visible: true, cssClass: 'role-tooltip executive-level' },
        tooltipText: 'Oversees company strategy, operations, and major corporate decisions'
    },
    {
        id: 'cto',
        content: { text: 'CTO', color: '#000000', fontSize: 16, fontWeight: '600' },
        x: 102,
        y: 180,
        width: 140,
        height: 75,
        fill: { color: '#E2D9F3' },
        stroke: { color: '#C5B3E6', width: 3 },
        tooltip: { visible: true, cssClass: 'role-tooltip executive-level' },
        tooltipText: 'Leads technology strategy, infrastructure, and development initiatives'
    },
    {
        id: 'cfo',
        content: { text: 'CFO', color: '#000000', fontSize: 16, fontWeight: '600' },
        x: 330,
        y: 180,
        width: 140,
        height: 75,
        fill: { color: '#E2D9F3' },
        stroke: { color: '#C5B3E6', width: 3 },
        tooltip: { visible: true, cssClass: 'role-tooltip executive-level' },
        tooltipText: 'Manages financial planning, reporting, and risk management'
    },
    {
        id: 'coo',
        content: { text: 'COO', color: '#000000', fontSize: 16, fontWeight: '600' },
        x: 557.6,
        y: 180,
        width: 140,
        height: 75,
        fill: { color: '#E2D9F3' },
        stroke: { color: '#C5B3E6', width: 3 },
        tooltip: { visible: true, cssClass: 'role-tooltip executive-level' },
        tooltipText: 'Oversees daily operations, processes, and resource allocation'
    },
    {
        id: 'dev-lead',
        content: { text: 'Dev Lead', color: '#000000', fontSize: 14 },
        x: 37,
        y: 320,
        width: 130,
        height: 70,
        fill: { color: '#E0F8F1' },
        stroke: { color: '#A3CFBB', width: 2 },
        tooltip: { visible: true, cssClass: 'role-tooltip manager-level' },
        tooltipText: 'Coordinates development team, code reviews, and technical architecture'
    },
    {
        id: 'security-lead',
        content: { text: 'Security Lead', color: '#000000', fontSize: 14 },
        x: 176.5,
        y: 320,
        width: 130,
        height: 70,
        fill: { color: '#E0F8F1' },
        stroke: { color: '#A3CFBB', width: 2 },
        tooltip: { visible: true, cssClass: 'role-tooltip manager-level' },
        tooltipText: 'Manages security protocols, threat detection, and compliance standards'
    },
    {
        id: 'finance-manager',
        content: { text: 'Finance Manager', color: '#000000', fontSize: 14 },
        x: 335.5,
        y: 320,
        width: 130,
        height: 70,
        fill: { color: '#FFF3CD' },
        stroke: { color: '#FFE69C', width: 2 },
        tooltip: { visible: true, cssClass: 'role-tooltip manager-level' },
        tooltipText: 'Handles budgeting, financial analysis, and expense tracking'
    },
    {
        id: 'ops-manager',
        content: { text: 'Operations Manager', color: '#000000', fontSize: 14 },
        x: 563,
        y: 320,
        width: 130,
        height: 70,
        fill: { color: '#F8D7DA' },
        stroke: { color: '#F5C2C7', width: 2 },
        tooltip: { visible: true, cssClass: 'role-tooltip manager-level' },
        tooltipText: 'Optimizes workflows, logistics, and cross-departmental coordination'
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'ceo',
        to: 'cto',
        tooltipText: 'Reports to CEO',
        tooltip: { visible: true, cssClass: 'connection-tooltip-custom' }
    },
    {
        from: 'ceo',
        to: 'cfo',
        tooltipText: 'Reports to CEO',
        tooltip: { visible: true, cssClass: 'connection-tooltip-custom' }
    },
    {
        from: 'ceo',
        to: 'coo',
        tooltipText: 'Reports to CEO',
        tooltip: { visible: true, cssClass: 'connection-tooltip-custom' }
    },
    {
        from: 'cto',
        to: 'dev-lead',
        tooltipText: 'Manages dev team',
        tooltip: { visible: true, cssClass: 'connection-tooltip-custom' }
    },
    {
        from: 'cto',
        to: 'security-lead',
        tooltipText: 'Manages security',
        tooltip: { visible: true, cssClass: 'connection-tooltip-custom' }
    },
    {
        from: 'cfo',
        to: 'finance-manager',
        tooltipText: 'Manages finances',
        tooltip: { visible: true, cssClass: 'connection-tooltip-custom' }
    },
    {
        from: 'coo',
        to: 'ops-manager',
        tooltipText: 'Manages operations',
        tooltip: { visible: true, cssClass: 'connection-tooltip-custom' }
    }
];
