export interface Customer {
    id: number;
    ContactName: string;
    CompanyName: string;
    Country: string;
    UnitsInStock: number;
    UnitsOnOrder: number;
}

const baseCustomers: Array<Omit<Customer, 'id'>> = [
    {
        ContactName: 'Maria Anders',
        CompanyName: 'Alfreds Futterkiste',
        Country: 'Germany',
        UnitsInStock: 39,
        UnitsOnOrder: 0
    },
    {
        ContactName: 'Ana Trujillo',
        CompanyName: 'Ana Trujillo Emparedados y helados',
        Country: 'Mexico',
        UnitsInStock: 3,
        UnitsOnOrder: 4
    },
    {
        ContactName: 'Antonio Moreno',
        CompanyName: 'Antonio Moreno Taquería',
        Country: 'Mexico',
        UnitsInStock: 0,
        UnitsOnOrder: 12
    },
    {
        ContactName: 'Thomas Hardy',
        CompanyName: 'Around the Horn',
        Country: 'United Kingdom',
        UnitsInStock: 29,
        UnitsOnOrder: 0
    }
];

export const customers: Customer[] = Array.from({ length: 60 }, (_, index) => {
    const base = baseCustomers[index % baseCustomers.length];

    return {
        id: index + 1,
        ...base,
        // Keep names stable for the first items, then make them unique.
        ContactName: index < baseCustomers.length ? base.ContactName : `${base.ContactName} ${index + 1}`
    };
});
