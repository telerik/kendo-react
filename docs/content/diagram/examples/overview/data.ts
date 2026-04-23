import { ShapeOptions, ConnectionOptions } from '@progress/kendo-react-diagram';

export interface EmployeeDataItem {
    firstName: string;
    lastName: string;
    image: string;
    title: string;
    colorScheme: string;
    strokeColor: string;
}

export const connectionStroke = { color: 'black', width: 2 };

export const shapes: ShapeOptions[] = [
    {
        id: 'board',
        dataItem: {
            firstName: 'Jane',
            lastName: 'Simons',
            image: './assets/diagram/jane.png',
            title: 'CEO',
            colorScheme: '#E0F8F1',
            strokeColor: '#A3CFBB'
        }
    },
    {
        id: 'generalManager',
        dataItem: {
            firstName: 'Liam',
            lastName: 'Turner',
            image: './assets/diagram/liam.png',
            title: 'General Manager',
            colorScheme: '#E0F8F1',
            strokeColor: '#A3CFBB'
        }
    },
    {
        id: 'hrManager',
        dataItem: {
            firstName: 'Amelia',
            lastName: 'Carter',
            image: './assets/diagram/amelia.png',
            title: 'HR Director',
            colorScheme: '#E2D9F3',
            strokeColor: '#C5B3E6'
        }
    },
    {
        id: 'uxManager',
        dataItem: {
            firstName: 'Noah',
            lastName: 'Sullivan',
            image: './assets/diagram/noah.png',
            title: 'UX Manager',
            colorScheme: '#E2D9F3',
            strokeColor: '#C5B3E6'
        }
    },
    {
        id: 'operationsManager',
        dataItem: {
            firstName: 'Zara',
            lastName: 'Mitchell',
            image: './assets/diagram/zara.png',
            title: 'Marketing Manager',
            colorScheme: '#E2D9F3',
            strokeColor: '#C5B3E6'
        }
    },
    {
        id: 'marketingManager',
        dataItem: {
            firstName: 'Kapoor',
            lastName: 'Chandra',
            image: './assets/diagram/kapoor.png',
            title: 'HR Manager',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE'
        }
    },
    {
        id: 'financeManager',
        dataItem: {
            firstName: 'Isabella',
            lastName: 'Hayes',
            image: './assets/diagram/isabella.png',
            title: 'UX/UI Design Lead',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE'
        }
    },
    {
        id: 'designSupervisor',
        dataItem: {
            firstName: 'Leo',
            lastName: 'Anderson',
            image: './assets/diagram/leo.png',
            title: 'Marketing Lead',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE'
        }
    },
    {
        id: 'statisticsDepartment',
        dataItem: {
            firstName: 'Sofia',
            lastName: 'Bennett',
            image: './assets/diagram/sofia.png',
            title: 'Recruitment Lead',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE'
        }
    },
    {
        id: 'salesManager',
        dataItem: {
            firstName: 'Mateo',
            lastName: 'Brooks',
            image: './assets/diagram/mateo.png',
            title: 'UX/UI Designer',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE'
        }
    },
    {
        id: 'recruitingTeam',
        dataItem: {
            firstName: 'Elias',
            lastName: 'Parker',
            image: './assets/diagram/elias.png',
            title: 'Senior Copywriter',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE'
        }
    },
    {
        id: 'developmentSupervisor',
        dataItem: {
            firstName: 'Lena',
            lastName: 'Robinson',
            image: './assets/diagram/lena.png',
            title: 'UX/UI Intern',
            colorScheme: '#CFE2FF',
            strokeColor: '#9EC5FE'
        }
    }
];

export const connections: ConnectionOptions[] = [
    { from: 'board', to: 'generalManager', fromConnector: 'bottom', toConnector: 'top', stroke: connectionStroke },
    { from: 'generalManager', to: 'hrManager', fromConnector: 'bottom', toConnector: 'top', stroke: connectionStroke },
    { from: 'generalManager', to: 'uxManager', fromConnector: 'bottom', toConnector: 'top', stroke: connectionStroke },
    {
        from: 'generalManager',
        to: 'operationsManager',
        fromConnector: 'bottom',
        toConnector: 'top',
        stroke: connectionStroke
    },
    {
        from: 'hrManager',
        to: 'marketingManager',
        fromConnector: 'bottom',
        toConnector: 'top',
        stroke: connectionStroke
    },
    { from: 'uxManager', to: 'financeManager', fromConnector: 'bottom', toConnector: 'top', stroke: connectionStroke },
    {
        from: 'operationsManager',
        to: 'designSupervisor',
        fromConnector: 'bottom',
        toConnector: 'top',
        stroke: connectionStroke
    },
    {
        from: 'marketingManager',
        to: 'statisticsDepartment',
        fromConnector: 'bottom',
        toConnector: 'top',
        stroke: connectionStroke
    },
    {
        from: 'financeManager',
        to: 'salesManager',
        fromConnector: 'bottom',
        toConnector: 'top',
        stroke: connectionStroke
    },
    {
        from: 'designSupervisor',
        to: 'recruitingTeam',
        fromConnector: 'bottom',
        toConnector: 'top',
        stroke: connectionStroke
    },
    {
        from: 'salesManager',
        to: 'developmentSupervisor',
        fromConnector: 'bottom',
        toConnector: 'top',
        stroke: connectionStroke
    }
];
