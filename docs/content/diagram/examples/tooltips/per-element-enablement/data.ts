import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export const shapes: ShapeOptions[] = [
    {
        id: 'patient-intake',
        content: { text: 'Patient Intake' },
        x: 100,
        y: 40,
        width: 160,
        height: 80,
        fill: { color: '#84B9F5' },
        stroke: { color: '#5A9FE8', width: 2 },
        tooltip: { visible: true },
        tooltipText: 'Initial patient registration and data collection'
    },
    {
        id: 'triage',
        content: { text: 'Triage Assessment' },
        x: 100,
        y: 170,
        width: 160,
        height: 80,
        fill: { color: '#C5A8E8' },
        stroke: { color: '#A77DD4', width: 2 },
        tooltip: { visible: true },
        tooltipText: 'Priority evaluation - Average wait: 15 minutes'
    },
    {
        id: 'examination',
        content: { text: 'Medical Examination' },
        x: 320,
        y: 170,
        width: 160,
        height: 80,
        fill: { color: '#87E8C3' },
        stroke: { color: '#5DD9AC', width: 2 },
        tooltip: { visible: false },
        tooltipText: 'This tooltip is disabled for examination phase'
    },
    {
        id: 'lab-tests',
        content: { text: 'Laboratory Tests' },
        x: 100,
        y: 300,
        width: 160,
        height: 80,
        fill: { color: '#FFD86E' },
        stroke: { color: '#F5C73D', width: 2 },
        tooltip: { visible: true },
        tooltipText: 'Blood work and diagnostic testing'
    },
    {
        id: 'discharge',
        content: { text: 'Discharge' },
        x: 320,
        y: 300,
        width: 160,
        height: 80,
        fill: { color: '#FFB6C1' },
        stroke: { color: '#FF69B4', width: 2 },
        tooltip: { visible: true },
        tooltipText: 'Final assessment and release'
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'patient-intake',
        to: 'triage',
        tooltipText: 'Patient referred for assessment',
        tooltip: { visible: true }
    },
    {
        from: 'triage',
        to: 'examination',
        tooltipText: 'Routing to medical examination',
        tooltip: { visible: false }
    },
    {
        from: 'triage',
        to: 'lab-tests',
        tooltipText: 'Ordered lab tests',
        tooltip: { visible: true }
    },
    {
        from: 'examination',
        to: 'discharge',
        tooltipText: 'Exam completed',
        tooltip: { visible: true }
    },
    {
        from: 'lab-tests',
        to: 'discharge',
        tooltipText: 'Results reviewed',
        tooltip: { visible: true }
    }
];
