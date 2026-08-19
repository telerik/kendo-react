export interface Asset {
    assetId: string;
    department: string;
    officeLocation: string;
    deviceType: string;
    deviceModel: string;
    assignedEmployee: string;
    purchaseDate: Date;
    status: string;
}

export const assets: Asset[] = [
    {
        assetId: 'AST-1001',
        department: 'R&D – North Division',
        officeLocation: 'Sofia HQ – Building A',
        deviceType: 'Workstation Laptop',
        deviceModel: 'Dell Precision 7780',
        assignedEmployee: 'John Anderson',
        purchaseDate: new Date('2025-01-15'),
        status: 'Active'
    },
    {
        assetId: 'AST-1002',
        department: 'R&D – North Division',
        officeLocation: 'Sofia HQ – Building A',
        deviceType: 'Workstation Laptop',
        deviceModel: 'MacBook Pro M4 Max',
        assignedEmployee: 'Sarah Mitchell',
        purchaseDate: new Date('2025-02-03'),
        status: 'Active'
    },
    {
        assetId: 'AST-1003',
        department: 'R&D – North Division',
        officeLocation: 'Sofia HQ – Building A',
        deviceType: 'Workstation Laptop',
        deviceModel: 'Lenovo ThinkPad P16',
        assignedEmployee: 'Michael Davis',
        purchaseDate: new Date('2025-03-12'),
        status: 'In Repair'
    },
    {
        assetId: 'AST-1004',
        department: 'R&D – North Division',
        officeLocation: 'London – Tech Center',
        deviceType: 'Workstation Laptop',
        deviceModel: 'HP ZBook Fury G11',
        assignedEmployee: 'Emily Johnson',
        purchaseDate: new Date('2025-04-18'),
        status: 'Active'
    },
    {
        assetId: 'AST-1005',
        department: 'R&D – Innovation Labs',
        officeLocation: 'London – Tech Center',
        deviceType: 'Workstation Laptop',
        deviceModel: 'MacBook Pro M4 Max',
        assignedEmployee: 'Robert Taylor',
        purchaseDate: new Date('2025-05-02'),
        status: 'Active'
    },
    {
        assetId: 'AST-1006',
        department: 'R&D – Innovation Labs',
        officeLocation: 'London – Tech Center',
        deviceType: 'Workstation Laptop',
        deviceModel: 'Dell Precision 7780',
        assignedEmployee: 'Jennifer Brown',
        purchaseDate: new Date('2025-05-19'),
        status: 'Retired'
    },
    {
        assetId: 'AST-1007',
        department: 'R&D – Innovation Labs',
        officeLocation: 'Singapore – Ops Center',
        deviceType: 'Compute Server',
        deviceModel: 'Dell PowerEdge R770',
        assignedEmployee: 'David Wilson',
        purchaseDate: new Date('2025-06-04'),
        status: 'Active'
    },
    {
        assetId: 'AST-1008',
        department: 'R&D – Innovation Labs',
        officeLocation: 'Singapore – Ops Center',
        deviceType: 'Compute Server',
        deviceModel: 'HPE ProLiant DL380',
        assignedEmployee: 'Lisa Martinez',
        purchaseDate: new Date('2025-06-11'),
        status: 'Active'
    },
    {
        assetId: 'AST-1009',
        department: 'Corporate Finance & Strategy',
        officeLocation: 'New York – Financial District',
        deviceType: 'Desktop Workstation',
        deviceModel: 'HP EliteDesk 800 G9',
        assignedEmployee: 'James Thompson',
        purchaseDate: new Date('2024-09-12'),
        status: 'Active'
    },
    {
        assetId: 'AST-1010',
        department: 'Corporate Finance & Strategy',
        officeLocation: 'New York – Financial District',
        deviceType: 'Desktop Workstation',
        deviceModel: 'Dell OptiPlex 7420',
        assignedEmployee: 'Amanda White',
        purchaseDate: new Date('2024-10-05'),
        status: 'Active'
    },
    {
        assetId: 'AST-1011',
        department: 'Corporate Finance & Strategy',
        officeLocation: 'Sofia HQ – Building A',
        deviceType: 'Desktop Workstation',
        deviceModel: 'Lenovo ThinkCentre M90q',
        assignedEmployee: 'Christopher Lee',
        purchaseDate: new Date('2024-11-14'),
        status: 'Active'
    },
    {
        assetId: 'AST-1012',
        department: 'Corporate Finance & Strategy',
        officeLocation: 'Sofia HQ – Building A',
        deviceType: 'Mobile Device',
        deviceModel: 'iPhone 17 Pro',
        assignedEmployee: 'Jessica Harris',
        purchaseDate: new Date('2024-12-01'),
        status: 'Active'
    },
    {
        assetId: 'AST-1013',
        department: 'Corporate Finance & Strategy',
        officeLocation: 'London – Tech Center',
        deviceType: 'Mobile Device',
        deviceModel: 'Samsung Galaxy X',
        assignedEmployee: 'Daniel Clark',
        purchaseDate: new Date('2025-01-07'),
        status: 'In Repair'
    },
    {
        assetId: 'AST-1014',
        department: 'Corporate Finance & Strategy',
        officeLocation: 'London – Tech Center',
        deviceType: 'Mobile Device',
        deviceModel: 'Google Pixel',
        assignedEmployee: 'Ashley Moore',
        purchaseDate: new Date('2025-02-09'),
        status: 'Active'
    },
    {
        assetId: 'AST-1015',
        department: 'HR & Talent Acquisition',
        officeLocation: 'Sofia HQ – Building A',
        deviceType: 'Mobile Device',
        deviceModel: 'iPhone 17 Pro',
        assignedEmployee: 'Matthew Robinson',
        purchaseDate: new Date('2024-08-20'),
        status: 'Active'
    },
    {
        assetId: 'AST-1016',
        department: 'HR & Talent Acquisition',
        officeLocation: 'Sofia HQ – Building A',
        deviceType: 'Mobile Device',
        deviceModel: 'Samsung Galaxy X',
        assignedEmployee: 'Nicole Walker',
        purchaseDate: new Date('2024-09-10'),
        status: 'Active'
    },
    {
        assetId: 'AST-1017',
        department: 'HR & Talent Acquisition',
        officeLocation: 'New York – Financial District',
        deviceType: 'Desktop Workstation',
        deviceModel: 'HP EliteDesk 800 G9',
        assignedEmployee: 'Ryan Hall',
        purchaseDate: new Date('2024-10-14'),
        status: 'Active'
    },
    {
        assetId: 'AST-1018',
        department: 'HR & Talent Acquisition',
        officeLocation: 'New York – Financial District',
        deviceType: 'Desktop Workstation',
        deviceModel: 'Dell OptiPlex 7420',
        assignedEmployee: 'Megan Allen',
        purchaseDate: new Date('2024-11-05'),
        status: 'Active'
    },
    {
        assetId: 'AST-1019',
        department: 'HR & Talent Acquisition',
        officeLocation: 'Singapore – Ops Center',
        deviceType: 'Mobile Device',
        deviceModel: 'iPhone 17 Pro',
        assignedEmployee: 'Brandon Young',
        purchaseDate: new Date('2025-01-16'),
        status: 'Retired'
    },
    {
        assetId: 'AST-1020',
        department: 'HR & Talent Acquisition',
        officeLocation: 'Singapore – Ops Center',
        deviceType: 'Mobile Device',
        deviceModel: 'Samsung Galaxy X',
        assignedEmployee: 'Lauren King',
        purchaseDate: new Date('2025-03-18'),
        status: 'Active'
    },
    {
        assetId: 'AST-1021',
        department: 'Sales & Customer Success',
        officeLocation: 'London – Tech Center',
        deviceType: 'Workstation Laptop',
        deviceModel: 'Dell Precision 7780',
        assignedEmployee: 'Kevin Wright',
        purchaseDate: new Date('2024-07-12'),
        status: 'Active'
    },
    {
        assetId: 'AST-1022',
        department: 'Sales & Customer Success',
        officeLocation: 'London – Tech Center',
        deviceType: 'Workstation Laptop',
        deviceModel: 'MacBook Pro M4 Max',
        assignedEmployee: 'Rachel Green',
        purchaseDate: new Date('2024-08-03'),
        status: 'Active'
    },
    {
        assetId: 'AST-1023',
        department: 'Sales & Customer Success',
        officeLocation: 'Sofia HQ – Building A',
        deviceType: 'Mobile Device',
        deviceModel: 'iPhone 17 Pro',
        assignedEmployee: 'Andrew Baker',
        purchaseDate: new Date('2024-09-07'),
        status: 'Active'
    },
    {
        assetId: 'AST-1024',
        department: 'Sales & Customer Success',
        officeLocation: 'Sofia HQ – Building A',
        deviceType: 'Mobile Device',
        deviceModel: 'Samsung Galaxy X',
        assignedEmployee: 'Stephanie Adams',
        purchaseDate: new Date('2024-10-21'),
        status: 'Active'
    },
    {
        assetId: 'AST-1025',
        department: 'Sales & Customer Success',
        officeLocation: 'New York – Financial District',
        deviceType: 'Mobile Device',
        deviceModel: 'Google Pixel',
        assignedEmployee: 'Brian Nelson',
        purchaseDate: new Date('2024-11-15'),
        status: 'In Repair'
    },
    {
        assetId: 'AST-1026',
        department: 'Sales & Customer Success',
        officeLocation: 'New York – Financial District',
        deviceType: 'Mobile Device',
        deviceModel: 'iPhone 17 Pro',
        assignedEmployee: 'Samantha Carter',
        purchaseDate: new Date('2024-12-12'),
        status: 'Active'
    },
    {
        assetId: 'AST-1027',
        department: 'Sales & Customer Success',
        officeLocation: 'Singapore – Ops Center',
        deviceType: 'Workstation Laptop',
        deviceModel: 'Lenovo ThinkPad P16',
        assignedEmployee: 'Jason Miller',
        purchaseDate: new Date('2025-01-20'),
        status: 'Active'
    },
    {
        assetId: 'AST-1028',
        department: 'Sales & Customer Success',
        officeLocation: 'Singapore – Ops Center',
        deviceType: 'Workstation Laptop',
        deviceModel: 'HP ZBook Fury G11',
        assignedEmployee: 'Melissa Phillips',
        purchaseDate: new Date('2025-02-15'),
        status: 'Active'
    },
    {
        assetId: 'AST-1029',
        department: 'Sales & Customer Success',
        officeLocation: 'Singapore – Ops Center',
        deviceType: 'Mobile Device',
        deviceModel: 'Samsung Galaxy X',
        assignedEmployee: 'Timothy Evans',
        purchaseDate: new Date('2025-03-11'),
        status: 'Active'
    },
    {
        assetId: 'AST-1030',
        department: 'Sales & Customer Success',
        officeLocation: 'Singapore – Ops Center',
        deviceType: 'Mobile Device',
        deviceModel: 'iPhone 17 Pro',
        assignedEmployee: 'Rebecca Turner',
        purchaseDate: new Date('2025-04-03'),
        status: 'Retired'
    }
];
