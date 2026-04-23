import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';
import { FlowchartShapeType } from '@progress/kendo-diagram-common';

export const shapeWidth = 150;
export const shapeHeight = 100;

export const shapes: ShapeOptions[] = [
    {
        id: '1',
        type: FlowchartShapeType.Terminator,
        content: { text: 'Start' },
        fill: { color: '#CFE2FF' },
        stroke: { color: '#9EC5FE', width: 4 },
        tooltipText: 'Entry point of the workflow process.',
        x: 237,
        y: 50,
        width: 266,
        height: 100
    },
    {
        id: '2',
        type: FlowchartShapeType.Process,
        content: { text: 'Define Requirements', textWrap: 'wrap' },
        fill: { color: '#E2D9F3' },
        stroke: { color: '#C5B3E6', width: 4 },
        tooltipText: 'Gather and document what needs to be built.',
        width: shapeWidth,
        height: shapeHeight,
        x: 270,
        y: 218
    },
    {
        id: '3',
        type: FlowchartShapeType.Document,
        content: { text: 'Specification' },
        fill: { color: '#fff' },
        stroke: { color: '#C1F0E2', width: 4 },
        tooltipText: 'Document features and functionality in detail.',
        width: shapeWidth,
        height: shapeHeight,
        x: 270,
        y: 386
    },
    {
        id: '4',
        type: FlowchartShapeType.Decision,
        content: { text: 'Approved?' },
        stroke: { color: '#FFE69C', width: 4 },
        fill: { color: '#fff' },
        tooltipText: 'Decision point: Are the requirements and specs validated?',
        width: shapeWidth,
        height: shapeHeight,
        x: 270,
        y: 541
    },
    {
        id: '5',
        type: FlowchartShapeType.Process,
        content: { text: 'Develop' },
        fill: { color: '#E2D9F3' },
        stroke: { color: '#C5B3E6', width: 4 },
        tooltipText: 'Engineers implement the approved requirements into code.',
        width: shapeWidth,
        height: shapeHeight,
        x: 270,
        y: 709
    },
    {
        id: '6',
        type: FlowchartShapeType.Process,
        content: { text: 'Quality Assurance', textWrap: 'wrap', relativePadding: 0.1 },
        fill: { color: '#E2D9F3' },
        stroke: { color: '#C5B3E6', width: 4 },
        tooltipText: 'Test the developed features to ensure they meet specifications.',
        width: shapeWidth,
        height: shapeHeight,
        x: 270,
        y: 903
    },
    {
        id: '7',
        type: FlowchartShapeType.Decision,
        content: { text: 'Bugs Found?' },
        stroke: { color: '#FFE69C', width: 4 },
        fill: { color: '#fff' },
        tooltipText: 'Decision point: Were there any issues detected during the testing?',
        width: shapeWidth,
        height: shapeHeight,
        x: 270,
        y: 1045
    },
    {
        id: '8',
        type: FlowchartShapeType.Process,
        content: { text: 'Bug Fixing' },
        fill: { color: '#E2D9F3' },
        stroke: { color: '#C5B3E6', width: 4 },
        tooltipText: 'Resolve identified defects and reset until stable.',
        width: shapeWidth,
        height: shapeHeight,
        x: 50,
        y: 1045
    },
    {
        id: '9',
        type: FlowchartShapeType.Process,
        content: { text: 'Release' },
        fill: { color: '#E2D9F3' },
        stroke: { color: '#C5B3E6', width: 4 },
        tooltipText: 'Deploy the test build into production or staging.',
        width: shapeWidth,
        height: shapeHeight,
        x: 486,
        y: 1045
    },
    {
        id: '10',
        type: FlowchartShapeType.Terminator,
        content: { text: 'Done' },
        fill: { color: '#CFE2FF' },
        stroke: { color: '#9EC5FE', width: 4 },
        tooltipText: 'Workflow is completed successfully.',
        x: 704,
        y: 1045,
        width: 267,
        height: 100
    }
];

export const connections: ConnectionOptions[] = [
    { from: '1', to: '2', tooltipText: 'Begin gathering requirements.' },
    { from: '2', to: '3', tooltipText: 'Translate needs into specs.' },
    { from: '3', to: '4', tooltipText: 'Submit specs for verification.' },
    {
        from: '4',
        to: '2',
        fromConnector: 'left',
        tooltipText: 'Return for clarification.',
        content: { text: 'No', fontWeight: 'bold', offset: 10, position: { horizontal: 'left' } }
    },
    {
        from: '4',
        to: '5',
        tooltipText: 'Process is approved.',
        content: { text: 'Yes', fontWeight: 'bold', offset: 10 }
    },
    { from: '5', to: '6', tooltipText: 'Send build for testing.' },
    { from: '6', to: '7', tooltipText: 'Check if issues exist.' },
    { from: '7', to: '8', tooltipText: 'Loop back for fixes.', content: { text: 'Yes', fontWeight: 'bold' } },
    { from: '8', fromConnector: 'top', to: '6', tooltip: { visible: false } },
    { from: '7', to: '9', tooltipText: 'Proceed to release.', content: { text: 'No', fontWeight: 'bold' } },
    { from: '9', to: '10', tooltipText: 'End of process.' }
];
