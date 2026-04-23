import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export interface EmployeeDataItem {
    firstName: string;
    lastName: string;
    image: string;
    title: string;
    colorScheme: string;
    strokeColor: string;
    department: string;
    email: string;
    phone: string;
    location: string;
    yearsAtCompany: number;
}

export const connectionStroke = { color: 'black', width: 2 };

export const shapesData: ShapeOptions[] = [
    {
        id: 'board',
        tooltipText: 'Chief Executive Officer',
        dataItem: {
            firstName: 'Jane',
            lastName: 'Simons',
            image: './assets/diagram/jane.png',
            title: 'CEO',
            colorScheme: '#E0F8F1',
            strokeColor: '#A3CFBB',
            department: 'Executive',
            email: 'jane.simons@company.com',
            phone: '+1 (555) 123-4567',
            location: 'New York, NY',
            yearsAtCompany: 10
        }
    },
    {
        id: 'generalManager',
        tooltipText: 'General Manager',
        dataItem: {
            firstName: 'Liam',
            lastName: 'Turner',
            image: './assets/diagram/liam.png',
            title: 'General Manager',
            colorScheme: '#E0F8F1',
            strokeColor: '#A3CFBB',
            department: 'Management',
            email: 'liam.turner@company.com',
            phone: '+1 (555) 234-5678',
            location: 'New York, NY',
            yearsAtCompany: 8
        }
    },
    {
        id: 'hrManager',
        tooltipText: 'HR Director',
        dataItem: {
            firstName: 'Amelia',
            lastName: 'Carter',
            image: './assets/diagram/amelia.png',
            title: 'HR Director',
            colorScheme: '#E2D9F3',
            strokeColor: '#C5B3E6',
            department: 'Human Resources',
            email: 'amelia.carter@company.com',
            phone: '+1 (555) 345-6789',
            location: 'Boston, MA',
            yearsAtCompany: 6
        }
    },
    {
        id: 'uxManager',
        tooltipText: 'UX Manager',
        dataItem: {
            firstName: 'Noah',
            lastName: 'Sullivan',
            image: './assets/diagram/noah.png',
            title: 'UX Manager',
            colorScheme: '#E2D9F3',
            strokeColor: '#C5B3E6',
            department: 'Design',
            email: 'noah.sullivan@company.com',
            phone: '+1 (555) 456-7890',
            location: 'San Francisco, CA',
            yearsAtCompany: 5
        }
    },
    {
        id: 'operationsManager',
        tooltipText: 'Marketing Manager',
        dataItem: {
            firstName: 'Zara',
            lastName: 'Mitchell',
            image: './assets/diagram/zara.png',
            title: 'Marketing Manager',
            colorScheme: '#E2D9F3',
            strokeColor: '#C5B3E6',
            department: 'Marketing',
            email: 'zara.mitchell@company.com',
            phone: '+1 (555) 567-8901',
            location: 'Chicago, IL',
            yearsAtCompany: 4
        }
    },
    {
        id: 'marketingManager',
        tooltipText: 'HR Manager',
        dataItem: {
            firstName: 'Kapoor',
            lastName: 'Chandra',
            image: './assets/diagram/kapoor.png',
            title: 'HR Manager',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE',
            department: 'Human Resources',
            email: 'kapoor.chandra@company.com',
            phone: '+1 (555) 678-9012',
            location: 'Boston, MA',
            yearsAtCompany: 3
        }
    },
    {
        id: 'financeManager',
        tooltipText: 'UX/UI Design Lead',
        dataItem: {
            firstName: 'Isabella',
            lastName: 'Hayes',
            image: './assets/diagram/isabella.png',
            title: 'UX/UI Design Lead',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE',
            department: 'Design',
            email: 'isabella.hayes@company.com',
            phone: '+1 (555) 789-0123',
            location: 'San Francisco, CA',
            yearsAtCompany: 4
        }
    },
    {
        id: 'designSupervisor',
        tooltipText: 'Marketing Lead',
        dataItem: {
            firstName: 'Leo',
            lastName: 'Anderson',
            image: './assets/diagram/leo.png',
            title: 'Marketing Lead',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE',
            department: 'Marketing',
            email: 'leo.anderson@company.com',
            phone: '+1 (555) 890-1234',
            location: 'Chicago, IL',
            yearsAtCompany: 3
        }
    },
    {
        id: 'statisticsDepartment',
        tooltipText: 'Recruitment Lead',
        dataItem: {
            firstName: 'Sofia',
            lastName: 'Bennett',
            image: './assets/diagram/sofia.png',
            title: 'Recruitment Lead',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE',
            department: 'Human Resources',
            email: 'sofia.bennett@company.com',
            phone: '+1 (555) 901-2345',
            location: 'Boston, MA',
            yearsAtCompany: 2
        }
    },
    {
        id: 'salesManager',
        tooltipText: 'UX/UI Designer',
        dataItem: {
            firstName: 'Mateo',
            lastName: 'Brooks',
            image: './assets/diagram/mateo.png',
            title: 'UX/UI Designer',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE',
            department: 'Design',
            email: 'mateo.brooks@company.com',
            phone: '+1 (555) 012-3456',
            location: 'San Francisco, CA',
            yearsAtCompany: 2
        }
    },
    {
        id: 'recruitingTeam',
        tooltipText: 'Senior Copywriter',
        dataItem: {
            firstName: 'Elias',
            lastName: 'Parker',
            image: './assets/diagram/elias.png',
            title: 'Senior Copywriter',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE',
            department: 'Marketing',
            email: 'elias.parker@company.com',
            phone: '+1 (555) 123-4568',
            location: 'Chicago, IL',
            yearsAtCompany: 3
        }
    },
    {
        id: 'developmentSupervisor',
        tooltipText: 'UX/UI Intern',
        dataItem: {
            firstName: 'Lena',
            lastName: 'Robinson',
            image: './assets/diagram/lena.png',
            title: 'UX/UI Intern',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE',
            department: 'Design',
            email: 'lena.robinson@company.com',
            phone: '+1 (555) 234-5679',
            location: 'San Francisco, CA',
            yearsAtCompany: 1
        }
    }
];

export const connectionsData: ConnectionOptions[] = [
    {
        from: 'board',
        to: 'generalManager',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Reports to CEO',
        stroke: connectionStroke
    },
    {
        from: 'generalManager',
        to: 'hrManager',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Reports to General Manager',
        stroke: connectionStroke
    },
    {
        from: 'generalManager',
        to: 'uxManager',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Reports to General Manager',
        stroke: connectionStroke
    },
    {
        from: 'generalManager',
        to: 'operationsManager',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Reports to General Manager',
        stroke: connectionStroke
    },
    {
        from: 'hrManager',
        to: 'marketingManager',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Reports to HR Director',
        stroke: connectionStroke
    },
    {
        from: 'uxManager',
        to: 'financeManager',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Reports to UX Manager',
        stroke: connectionStroke
    },
    {
        from: 'operationsManager',
        to: 'designSupervisor',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Reports to Marketing Manager',
        stroke: connectionStroke
    },
    {
        from: 'marketingManager',
        to: 'statisticsDepartment',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Reports to HR Manager',
        stroke: connectionStroke
    },
    {
        from: 'financeManager',
        to: 'salesManager',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Reports to Design Lead',
        stroke: connectionStroke
    },
    {
        from: 'designSupervisor',
        to: 'recruitingTeam',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Reports to Marketing Lead',
        stroke: connectionStroke
    },
    {
        from: 'salesManager',
        to: 'developmentSupervisor',
        fromConnector: 'bottom',
        toConnector: 'top',
        tooltipText: 'Reports to UX/UI Designer',
        stroke: connectionStroke
    }
];
