import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export interface EmployeeData {
    firstName: string;
    lastName: string;
    title: string;
    department: string;
    employeeId: string;
}

export const shapes: ShapeOptions[] = [
    {
        id: 'employee1',
        type: 'rectangle',
        width: 160,
        height: 80,
        x: 250,
        y: 50,
        dataItem: {
            firstName: 'John',
            lastName: 'Doe',
            title: 'Manager',
            department: 'Sales',
            employeeId: 'EMP001'
        } satisfies EmployeeData,
        content: {
            text: 'John Doe\nManager'
        },
        fill: {
            color: '#007bff'
        }
    },
    {
        id: 'employee2',
        type: 'rectangle',
        width: 160,
        height: 80,
        x: 250,
        y: 180,
        dataItem: {
            firstName: 'Jane',
            lastName: 'Smith',
            title: 'Developer',
            department: 'IT',
            employeeId: 'EMP002'
        } satisfies EmployeeData,
        content: {
            text: 'Jane Smith\nDeveloper'
        },
        fill: {
            color: '#28a745'
        }
    },
    {
        id: 'employee3',
        type: 'rectangle',
        width: 160,
        height: 80,
        x: 100,
        y: 310,
        dataItem: {
            firstName: 'Mike',
            lastName: 'Johnson',
            title: 'Designer',
            department: 'Creative',
            employeeId: 'EMP003'
        } satisfies EmployeeData,
        content: {
            text: 'Mike Johnson\nDesigner'
        },
        fill: {
            color: '#6f42c1'
        }
    },
    {
        id: 'employee4',
        type: 'rectangle',
        width: 160,
        height: 80,
        x: 400,
        y: 310,
        dataItem: {
            firstName: 'Sarah',
            lastName: 'Wilson',
            title: 'Analyst',
            department: 'Finance',
            employeeId: 'EMP004'
        } satisfies EmployeeData,
        content: {
            text: 'Sarah Wilson\nAnalyst'
        },
        fill: {
            color: '#fd7e14'
        }
    }
];

export const connections: ConnectionOptions[] = [
    {
        from: 'employee1',
        to: 'employee2',
        content: {
            text: 'Supervises'
        },
        fromConnector: 'bottom',
        toConnector: 'top'
    },
    {
        from: 'employee2',
        to: 'employee3',
        content: {
            text: 'Collaborates'
        },
        fromConnector: 'bottom',
        toConnector: 'top'
    },
    {
        from: 'employee2',
        to: 'employee4',
        content: {
            text: 'Coordinates'
        },
        fromConnector: 'bottom',
        toConnector: 'top'
    }
];
