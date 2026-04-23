import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'checking',
        content: { text: 'Checking\nAccount', fontSize: 14, fontWeight: '600', color: 'white' },
        width: 180,
        height: 100,
        fill: { color: '#007bff' },
        stroke: { color: '#0056b3', width: 2 },
        cornerRadius: 5
    },
    {
        id: 'savings',
        content: { text: 'Savings\nAccount', fontSize: 14, fontWeight: '600', color: 'white' },
        width: 180,
        height: 100,
        fill: { color: '#6f42c1' },
        stroke: { color: '#5a32a3', width: 2 },
        cornerRadius: 5
    },
    {
        id: 'investment',
        content: { text: 'Investment\nAccount', fontSize: 14, fontWeight: '600', color: 'white' },
        width: 180,
        height: 100,
        fill: { color: '#20c997' },
        stroke: { color: '#199d76', width: 2 },
        cornerRadius: 5
    },
    {
        id: 'retirement',
        content: { text: 'Retirement\nFund', fontSize: 14, fontWeight: '600', color: 'white' },
        width: 180,
        height: 100,
        fill: { color: '#ffc107' },
        stroke: { color: '#d39e00', width: 2 },
        cornerRadius: 5
    },
    {
        id: 'bills',
        content: { text: 'Bill\nPayments', fontSize: 14, fontWeight: '600', color: 'white' },
        width: 180,
        height: 100,
        fill: { color: '#dc3545' },
        stroke: { color: '#bd2130', width: 2 },
        cornerRadius: 5
    },
    {
        id: 'emergency',
        content: { text: 'Emergency\nFund', fontSize: 14, fontWeight: '600', color: 'white' },
        width: 180,
        height: 100,
        fill: { color: '#28a745' },
        stroke: { color: '#1e7e34', width: 2 },
        cornerRadius: 5
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'checking',
        to: 'savings',
        tooltipText: 'tooltip',
        dataItem: {
            transferType: 'Automatic Savings Transfer',
            amount: 500,
            frequency: 'Monthly',
            status: 'Active'
        }
    },
    {
        from: 'checking',
        to: 'investment',
        tooltipText: 'tooltip',
        dataItem: {
            transferType: 'Investment Contribution',
            amount: 1000,
            frequency: 'Bi-weekly',
            status: 'Active'
        }
    },
    {
        from: 'savings',
        to: 'retirement',
        tooltipText: 'tooltip',
        dataItem: {
            transferType: 'Retirement Contribution',
            amount: 750,
            frequency: 'Monthly',
            status: 'Scheduled'
        }
    },
    {
        from: 'investment',
        to: 'bills',
        tooltipText: 'tooltip',
        dataItem: {
            transferType: 'Dividend Distribution',
            amount: 350,
            frequency: 'Quarterly',
            status: 'Active'
        }
    },
    {
        from: 'bills',
        to: 'emergency',
        tooltipText: 'tooltip',
        dataItem: {
            transferType: 'Overflow to Emergency',
            amount: 150,
            frequency: 'As needed',
            status: 'Scheduled'
        }
    }
];
