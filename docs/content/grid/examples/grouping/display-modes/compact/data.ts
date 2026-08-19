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
        department: 'Research & Development Department – North Division',
        officeLocation: 'Sofia Headquarters – Building A West Wing',
        deviceType: 'Developer Workstation Laptop',
        deviceModel: 'Dell Precision 7780',
        assignedEmployee: 'John Anderson',
        purchaseDate: new Date('2025-01-15'),
        status: 'Active'
    },
    {
        assetId: 'AST-1002',
        department: 'Research & Development Department – North Division',
        officeLocation: 'Sofia Headquarters – Building A West Wing',
        deviceType: 'Developer Workstation Laptop',
        deviceModel: 'MacBook Pro M4 Max',
        assignedEmployee: 'Sarah Mitchell',
        purchaseDate: new Date('2025-02-03'),
        status: 'Active'
    },
    {
        assetId: 'AST-1003',
        department: 'Research & Development Department – North Division',
        officeLocation: 'Sofia Headquarters – Building A West Wing',
        deviceType: 'Developer Workstation Laptop',
        deviceModel: 'Lenovo ThinkPad P16',
        assignedEmployee: 'Michael Davis',
        purchaseDate: new Date('2025-03-12'),
        status: 'In Repair'
    },
    {
        assetId: 'AST-1004',
        department: 'Research & Development Department – North Division',
        officeLocation: 'London Innovation Campus – Technology Center',
        deviceType: 'Developer Workstation Laptop',
        deviceModel: 'HP ZBook Fury G11',
        assignedEmployee: 'Emily Johnson',
        purchaseDate: new Date('2025-04-18'),
        status: 'Active'
    },
    {
        assetId: 'AST-1005',
        department: 'Research & Development Department – Innovation Labs',
        officeLocation: 'London Innovation Campus – Technology Center',
        deviceType: 'Developer Workstation Laptop',
        deviceModel: 'MacBook Pro M4 Max',
        assignedEmployee: 'Robert Taylor',
        purchaseDate: new Date('2025-05-02'),
        status: 'Active'
    },
    {
        assetId: 'AST-1006',
        department: 'Research & Development Department – Innovation Labs',
        officeLocation: 'London Innovation Campus – Technology Center',
        deviceType: 'Developer Workstation Laptop',
        deviceModel: 'Dell Precision 7780',
        assignedEmployee: 'Jennifer Brown',
        purchaseDate: new Date('2025-05-19'),
        status: 'Retired'
    },
    {
        assetId: 'AST-1007',
        department: 'Research & Development Department – Innovation Labs',
        officeLocation: 'Singapore Regional Operations Center',
        deviceType: 'High Performance Compute Server',
        deviceModel: 'Dell PowerEdge R770 Rack Server',
        assignedEmployee: 'David Wilson',
        purchaseDate: new Date('2025-06-04'),
        status: 'Active'
    },
    {
        assetId: 'AST-1008',
        department: 'Research & Development Department – Innovation Labs',
        officeLocation: 'Singapore Regional Operations Center',
        deviceType: 'High Performance Compute Server',
        deviceModel: 'HPE ProLiant DL380 Gen12 Server',
        assignedEmployee: 'Lisa Martinez',
        purchaseDate: new Date('2025-06-11'),
        status: 'Active'
    },
    {
        assetId: 'AST-1009',
        department: 'Corporate Finance & Strategic Planning Department',
        officeLocation: 'New York Corporate Office – Financial District',
        deviceType: 'Executive Desktop Workstation',
        deviceModel: 'HP EliteDesk 800 G9',
        assignedEmployee: 'James Thompson',
        purchaseDate: new Date('2024-09-12'),
        status: 'Active'
    },
    {
        assetId: 'AST-1010',
        department: 'Corporate Finance & Strategic Planning Department',
        officeLocation: 'New York Corporate Office – Financial District',
        deviceType: 'Executive Desktop Workstation',
        deviceModel: 'Dell OptiPlex 7420',
        assignedEmployee: 'Amanda White',
        purchaseDate: new Date('2024-10-05'),
        status: 'Active'
    },
    {
        assetId: 'AST-1011',
        department: 'Corporate Finance & Strategic Planning Department',
        officeLocation: 'Sofia Headquarters – Building A West Wing',
        deviceType: 'Executive Desktop Workstation',
        deviceModel: 'Lenovo ThinkCentre M90q',
        assignedEmployee: 'Christopher Lee',
        purchaseDate: new Date('2024-11-14'),
        status: 'Active'
    },
    {
        assetId: 'AST-1012',
        department: 'Corporate Finance & Strategic Planning Department',
        officeLocation: 'Sofia Headquarters – Building A West Wing',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'iPhone 17 Pro Enterprise Edition',
        assignedEmployee: 'Jessica Harris',
        purchaseDate: new Date('2024-12-01'),
        status: 'Active'
    },
    {
        assetId: 'AST-1013',
        department: 'Corporate Finance & Strategic Planning Department',
        officeLocation: 'London Innovation Campus – Technology Center',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'Samsung Galaxy Enterprise X',
        assignedEmployee: 'Daniel Clark',
        purchaseDate: new Date('2025-01-07'),
        status: 'In Repair'
    },
    {
        assetId: 'AST-1014',
        department: 'Corporate Finance & Strategic Planning Department',
        officeLocation: 'London Innovation Campus – Technology Center',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'Google Pixel Enterprise Edition',
        assignedEmployee: 'Ashley Moore',
        purchaseDate: new Date('2025-02-09'),
        status: 'Active'
    },
    {
        assetId: 'AST-1015',
        department: 'Global Human Resources & Talent Acquisition',
        officeLocation: 'Sofia Headquarters – Building A West Wing',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'iPhone 17 Pro Enterprise Edition',
        assignedEmployee: 'Matthew Robinson',
        purchaseDate: new Date('2024-08-20'),
        status: 'Active'
    },
    {
        assetId: 'AST-1016',
        department: 'Global Human Resources & Talent Acquisition',
        officeLocation: 'Sofia Headquarters – Building A West Wing',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'Samsung Galaxy Enterprise X',
        assignedEmployee: 'Nicole Walker',
        purchaseDate: new Date('2024-09-10'),
        status: 'Active'
    },
    {
        assetId: 'AST-1017',
        department: 'Global Human Resources & Talent Acquisition',
        officeLocation: 'New York Corporate Office – Financial District',
        deviceType: 'Executive Desktop Workstation',
        deviceModel: 'HP EliteDesk 800 G9',
        assignedEmployee: 'Ryan Hall',
        purchaseDate: new Date('2024-10-14'),
        status: 'Active'
    },
    {
        assetId: 'AST-1018',
        department: 'Global Human Resources & Talent Acquisition',
        officeLocation: 'New York Corporate Office – Financial District',
        deviceType: 'Executive Desktop Workstation',
        deviceModel: 'Dell OptiPlex 7420',
        assignedEmployee: 'Megan Allen',
        purchaseDate: new Date('2024-11-05'),
        status: 'Active'
    },
    {
        assetId: 'AST-1019',
        department: 'Global Human Resources & Talent Acquisition',
        officeLocation: 'Singapore Regional Operations Center',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'iPhone 17 Pro Enterprise Edition',
        assignedEmployee: 'Brandon Young',
        purchaseDate: new Date('2025-01-16'),
        status: 'Retired'
    },
    {
        assetId: 'AST-1020',
        department: 'Global Human Resources & Talent Acquisition',
        officeLocation: 'Singapore Regional Operations Center',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'Samsung Galaxy Enterprise X',
        assignedEmployee: 'Lauren King',
        purchaseDate: new Date('2025-03-18'),
        status: 'Active'
    },
    {
        assetId: 'AST-1021',
        department: 'Enterprise Sales & Customer Success Operations',
        officeLocation: 'London Innovation Campus – Technology Center',
        deviceType: 'Developer Workstation Laptop',
        deviceModel: 'Dell Precision 7780',
        assignedEmployee: 'Kevin Wright',
        purchaseDate: new Date('2024-07-12'),
        status: 'Active'
    },
    {
        assetId: 'AST-1022',
        department: 'Enterprise Sales & Customer Success Operations',
        officeLocation: 'London Innovation Campus – Technology Center',
        deviceType: 'Developer Workstation Laptop',
        deviceModel: 'MacBook Pro M4 Max',
        assignedEmployee: 'Rachel Green',
        purchaseDate: new Date('2024-08-03'),
        status: 'Active'
    },
    {
        assetId: 'AST-1023',
        department: 'Enterprise Sales & Customer Success Operations',
        officeLocation: 'Sofia Headquarters – Building A West Wing',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'iPhone 17 Pro Enterprise Edition',
        assignedEmployee: 'Andrew Baker',
        purchaseDate: new Date('2024-09-07'),
        status: 'Active'
    },
    {
        assetId: 'AST-1024',
        department: 'Enterprise Sales & Customer Success Operations',
        officeLocation: 'Sofia Headquarters – Building A West Wing',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'Samsung Galaxy Enterprise X',
        assignedEmployee: 'Stephanie Adams',
        purchaseDate: new Date('2024-10-21'),
        status: 'Active'
    },
    {
        assetId: 'AST-1025',
        department: 'Enterprise Sales & Customer Success Operations',
        officeLocation: 'New York Corporate Office – Financial District',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'Google Pixel Enterprise Edition',
        assignedEmployee: 'Brian Nelson',
        purchaseDate: new Date('2024-11-15'),
        status: 'In Repair'
    },
    {
        assetId: 'AST-1026',
        department: 'Enterprise Sales & Customer Success Operations',
        officeLocation: 'New York Corporate Office – Financial District',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'iPhone 17 Pro Enterprise Edition',
        assignedEmployee: 'Samantha Carter',
        purchaseDate: new Date('2024-12-12'),
        status: 'Active'
    },
    {
        assetId: 'AST-1027',
        department: 'Enterprise Sales & Customer Success Operations',
        officeLocation: 'Singapore Regional Operations Center',
        deviceType: 'Developer Workstation Laptop',
        deviceModel: 'Lenovo ThinkPad P16',
        assignedEmployee: 'Jason Miller',
        purchaseDate: new Date('2025-01-20'),
        status: 'Active'
    },
    {
        assetId: 'AST-1028',
        department: 'Enterprise Sales & Customer Success Operations',
        officeLocation: 'Singapore Regional Operations Center',
        deviceType: 'Developer Workstation Laptop',
        deviceModel: 'HP ZBook Fury G11',
        assignedEmployee: 'Melissa Phillips',
        purchaseDate: new Date('2025-02-15'),
        status: 'Active'
    },
    {
        assetId: 'AST-1029',
        department: 'Enterprise Sales & Customer Success Operations',
        officeLocation: 'Singapore Regional Operations Center',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'Samsung Galaxy Enterprise X',
        assignedEmployee: 'Timothy Evans',
        purchaseDate: new Date('2025-03-11'),
        status: 'Active'
    },
    {
        assetId: 'AST-1030',
        department: 'Enterprise Sales & Customer Success Operations',
        officeLocation: 'Singapore Regional Operations Center',
        deviceType: 'Enterprise Mobile Device Fleet',
        deviceModel: 'iPhone 17 Pro Enterprise Edition',
        assignedEmployee: 'Rebecca Turner',
        purchaseDate: new Date('2025-04-03'),
        status: 'Retired'
    }
];
