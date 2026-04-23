import * as React from 'react';
import {
    Diagram,
    convertToDiagramModel,
    DiagramMapping,
    ShapeOptions,
    ConnectionOptions
} from '@progress/kendo-react-diagram';
import { Diagram as DiagramWidget } from '@progress/kendo-diagram-common';

type OrganizationApiResponse = {
    organizationData: {
        departments: Array<{
            deptId: string;
            deptName: string;
            manager: string;
            location: { x: number; y: number };
            staffCount: number;
            budget: number;
        }>;
        reporting: Array<{
            supervisor: string;
            subordinate: string;
            reportingType: string;
        }>;
    };
    metadata: {
        lastUpdated: string;
        fiscalYear: number;
    };
};

const getDepartmentColor = (deptId: string): string => {
    const colors: Record<string, string> = {
        exec: '#d32f2f',
        engineering: '#1976d2',
        sales: '#388e3c',
        operations: '#f57c00',
        product: '#7b1fa2',
        qa: '#0097a7',
        marketing: '#c2185b'
    };
    return colors[deptId] || '#607d8b';
};

const getApiResponse = (): OrganizationApiResponse => ({
    organizationData: {
        departments: [
            {
                deptId: 'exec',
                deptName: 'Executive',
                manager: 'CEO',
                location: { x: 200, y: 50 },
                staffCount: 5,
                budget: 2000000
            },
            {
                deptId: 'engineering',
                deptName: 'Engineering',
                manager: 'VP Engineering',
                location: { x: 50, y: 180 },
                staffCount: 45,
                budget: 5000000
            },
            {
                deptId: 'sales',
                deptName: 'Sales',
                manager: 'VP Sales',
                location: { x: 220, y: 180 },
                staffCount: 30,
                budget: 3000000
            },
            {
                deptId: 'operations',
                deptName: 'Operations',
                manager: 'VP Operations',
                location: { x: 390, y: 180 },
                staffCount: 25,
                budget: 2500000
            },
            {
                deptId: 'product',
                deptName: 'Product',
                manager: 'Product Director',
                location: { x: 50, y: 310 },
                staffCount: 15,
                budget: 1500000
            },
            {
                deptId: 'qa',
                deptName: 'Quality Assurance',
                manager: 'QA Director',
                location: { x: 220, y: 310 },
                staffCount: 20,
                budget: 1200000
            },
            {
                deptId: 'marketing',
                deptName: 'Marketing',
                manager: 'Marketing Director',
                location: { x: 390, y: 310 },
                staffCount: 18,
                budget: 2000000
            }
        ],
        reporting: [
            { supervisor: 'exec', subordinate: 'engineering', reportingType: 'direct' },
            { supervisor: 'exec', subordinate: 'sales', reportingType: 'direct' },
            { supervisor: 'exec', subordinate: 'operations', reportingType: 'direct' },
            { supervisor: 'engineering', subordinate: 'product', reportingType: 'direct' },
            { supervisor: 'engineering', subordinate: 'qa', reportingType: 'direct' },
            { supervisor: 'sales', subordinate: 'marketing', reportingType: 'functional' },
            { supervisor: 'product', subordinate: 'qa', reportingType: 'dotted' }
        ]
    },
    metadata: {
        lastUpdated: new Date().toISOString(),
        fiscalYear: 2024
    }
});

const App = () => {
    const [shapes, setShapes] = React.useState<ShapeOptions[]>([]);
    const [connections, setConnections] = React.useState<ConnectionOptions[]>([]);
    const diagramRef = React.useRef<DiagramWidget>(null);

    React.useEffect(() => {
        const apiResponse = getApiResponse();

        const mapping: DiagramMapping = {
            shapes: {
                source: 'organizationData.departments',
                map: {
                    id: 'deptId',
                    content: (dept: any) => ({
                        text: `${dept.deptName}\n${dept.manager}\nStaff: ${dept.staffCount}`
                    }),
                    x: 'location.x',
                    y: 'location.y',
                    fill: (dept: any) => ({ color: getDepartmentColor(dept.deptId) })
                }
            },
            connections: {
                source: 'organizationData.reporting',
                map: {
                    from: 'supervisor',
                    to: 'subordinate',
                    stroke: (line: any) => ({
                        color: line.reportingType === 'direct' ? '#607d8b' : '#9e9e9e',
                        width: line.reportingType === 'direct' ? 2 : 1,
                        dashType: line.reportingType === 'dotted' ? 'dash' : undefined
                    })
                }
            }
        };

        const result = convertToDiagramModel(apiResponse, mapping);
        setShapes(result.shapes);
        setConnections(result.connections);
    }, []);

    React.useEffect(() => {
        if (shapes.length > 0 && diagramRef.current) {
            diagramRef.current.bringIntoView(diagramRef.current.shapes);
        }
    }, [shapes]);

    return (
        <Diagram
            ref={diagramRef}
            shapes={shapes}
            connections={connections}
            layout={{ type: 'tree', subtype: 'down', horizontalSeparation: 100, verticalSeparation: 80 }}
            connectionDefaults={{
                stroke: { color: '#607d8b', width: 2 },
                endCap: { type: 'ArrowEnd', fill: { color: '#607d8b' } }
            }}
            shapeDefaults={{
                width: 160,
                height: 80,
                type: 'rectangle',
                fill: { color: '#0078d4' },
                stroke: { color: '#005a9e', width: 2 }
            }}
            zoom={0.85}
            zoomMin={0.5}
            zoomMax={1.5}
            style={{ height: 480 }}
        />
    );
};

export default App;
