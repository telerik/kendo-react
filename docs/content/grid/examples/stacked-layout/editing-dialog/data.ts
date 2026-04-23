export interface Customer {
    CustomerID: number;
    ContactName: string;
    CompanyName: string;
    Country: string;
}

export const customers: Customer[] = [
    {
        CustomerID: 1,
        ContactName: 'Ana Trujillo',
        CompanyName: 'Alfreds Futterkiste',
        Country: 'Germany'
    },
    {
        CustomerID: 2,
        ContactName: 'Antonio Moreno',
        CompanyName: 'Antonio Moreno Taquería',
        Country: 'Mexico'
    },
    {
        CustomerID: 3,
        ContactName: 'Thomas Hardy',
        CompanyName: 'Around the Horn',
        Country: 'UK'
    },
    {
        CustomerID: 4,
        ContactName: 'Christina Berglund',
        CompanyName: 'Berglunds snabbköp',
        Country: 'Sweden'
    },
    {
        CustomerID: 5,
        ContactName: 'Hanna Moos',
        CompanyName: 'Blauer See Delikatessen',
        Country: 'Germany'
    },
    {
        CustomerID: 6,
        ContactName: 'Frédérique Citeaux',
        CompanyName: 'Blondesddsl père et fils',
        Country: 'France'
    },
    {
        CustomerID: 7,
        ContactName: 'Martín Sommer',
        CompanyName: 'Bólido Comidas preparadas',
        Country: 'Spain'
    },
    {
        CustomerID: 8,
        ContactName: 'Laurence Lebihan',
        CompanyName: 'Bon app',
        Country: 'France'
    },
    {
        CustomerID: 9,
        ContactName: 'Elizabeth Lincoln',
        CompanyName: 'Bottom-Dollar Markets',
        Country: 'Canada'
    },
    {
        CustomerID: 10,
        ContactName: 'Victoria Ashworth',
        CompanyName: 'B s Beverages',
        Country: 'UK'
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
