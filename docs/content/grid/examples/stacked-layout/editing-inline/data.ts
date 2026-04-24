export interface Customer {
    CustomerID: number;
    ContactName: string;
    ContactTitle: string;
    CompanyName: string;
    Country: string;
    City: string;
    Budget: number;
    OrderDate: Date;
    IsActive: boolean;
    inEdit?: boolean;
}

export const customers: Customer[] = [
    {
        CustomerID: 1,
        ContactName: 'Ana Trujillo',
        ContactTitle: 'Owner',
        CompanyName: 'Alfreds Futterkiste',
        Country: 'Germany',
        City: 'Berlin',
        Budget: 75000,
        OrderDate: new Date(2024, 0, 15),
        IsActive: true
    },
    {
        CustomerID: 2,
        ContactName: 'Antonio Moreno',
        ContactTitle: 'Owner',
        CompanyName: 'Antonio Moreno Taquería',
        Country: 'Mexico',
        City: 'México D.F.',
        Budget: 52000,
        OrderDate: new Date(2024, 1, 20),
        IsActive: false
    },
    {
        CustomerID: 3,
        ContactName: 'Thomas Hardy',
        ContactTitle: 'Sales Representative',
        CompanyName: 'Around the Horn',
        Country: 'UK',
        City: 'London',
        Budget: 63000,
        OrderDate: new Date(2024, 2, 10),
        IsActive: true
    },
    {
        CustomerID: 4,
        ContactName: 'Christina Berglund',
        ContactTitle: 'Order Administrator',
        CompanyName: 'Berglunds snabbköp',
        Country: 'Sweden',
        City: 'Luleå',
        Budget: 48000,
        OrderDate: new Date(2024, 3, 5),
        IsActive: true
    },
    {
        CustomerID: 5,
        ContactName: 'Hanna Moos',
        ContactTitle: 'Sales Representative',
        CompanyName: 'Blauer See Delikatessen',
        Country: 'Germany',
        City: 'Mannheim',
        Budget: 81000,
        OrderDate: new Date(2024, 4, 18),
        IsActive: false
    },
    {
        CustomerID: 6,
        ContactName: 'Frédérique Citeaux',
        ContactTitle: 'Marketing Manager',
        CompanyName: 'Blondesddsl père et fils',
        Country: 'France',
        City: 'Strasbourg',
        Budget: 69000,
        OrderDate: new Date(2024, 5, 22),
        IsActive: true
    },
    {
        CustomerID: 7,
        ContactName: 'Martín Sommer',
        ContactTitle: 'Owner',
        CompanyName: 'Bólido Comidas preparadas',
        Country: 'Spain',
        City: 'Madrid',
        Budget: 58000,
        OrderDate: new Date(2024, 6, 8),
        IsActive: false
    },
    {
        CustomerID: 8,
        ContactName: 'Laurence Lebihan',
        ContactTitle: 'Owner',
        CompanyName: 'Bon app',
        Country: 'France',
        City: 'Marseille',
        Budget: 72000,
        OrderDate: new Date(2024, 7, 14),
        IsActive: true
    },
    {
        CustomerID: 9,
        ContactName: 'Elizabeth Lincoln',
        ContactTitle: 'Accounting Manager',
        CompanyName: 'Bottom-Dollar Markets',
        Country: 'Canada',
        City: 'Tsawwassen',
        Budget: 55000,
        OrderDate: new Date(2024, 8, 30),
        IsActive: true
    },
    {
        CustomerID: 10,
        ContactName: 'Victoria Ashworth',
        ContactTitle: 'Sales Representative',
        CompanyName: 'B s Beverages',
        Country: 'UK',
        City: 'London',
        Budget: 66000,
        OrderDate: new Date(2024, 9, 12),
        IsActive: false
    }
];

export const countries = [
    'Germany',
    'Mexico',
    'UK',
    'Sweden',
    'France',
    'Spain',
    'Canada',
    'USA',
    'Brazil',
    'Argentina'
];
