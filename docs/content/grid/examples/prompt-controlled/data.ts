type Customer = {
    Id: number;
    Account: string;
    CustomerRating: number;
    Region: string;
    SalesPerson: string;
    NumberOfSeats: number;
    OrderDate: Date;
    Bookings: number;
    Discount: number;
    OrderType: string;
    LicenseType: string;
    Product: string;
    ContactEmail: string;
    ContactPhone: string;
    Industry: string;
    Status: string;
    SalesPersonBookingsSum?: number;
};

function generateCustomers(count: number): Customer[] {
    const accounts = [
        'Acme Corporation',
        'TechStart Inc',
        'Global Solutions Ltd',
        'Innovation Labs',
        'DataCore Systems',
        'CloudFirst Technologies',
        'Enterprise Software Co',
        'Digital Dynamics',
        'Quantum Systems',
        'NextGen Industries',
        'Alpha Technologies',
        'Beta Enterprises',
        'Gamma Solutions',
        'Delta Innovations',
        'Epsilon Corp'
    ];
    const salesPeople = [
        'Sarah Johnson',
        'Michael Chen',
        'Emma Williams',
        'James Rodriguez',
        'Olivia Martinez',
        'David Kim',
        'Sophia Patel',
        'Daniel Brown',
        'Ava Garcia',
        'Matthew Lee'
    ];
    const regions = ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East', 'Africa'];
    const orderTypes = ['New', 'Existing', 'Renewal'];
    const licenseTypes = ['Perpetual', 'Subscription'];
    const products = [
        'Enterprise Suite',
        'Professional Edition',
        'Standard Package',
        'Premium Bundle',
        'Developer Tools',
        'Analytics Platform',
        'Cloud Services',
        'Mobile Solutions'
    ];
    const industries = [
        'Technology',
        'Healthcare',
        'Finance',
        'Retail',
        'Manufacturing',
        'Education',
        'Government',
        'Entertainment'
    ];
    const statuses = ['Active', 'Pending', 'Completed', 'In Review'];

    const customers: Customer[] = [];
    for (let i = 1; i <= count; i++) {
        const orderDate = new Date();
        orderDate.setDate(orderDate.getDate() - Math.floor(Math.random() * 730)); // Last 2 years
        orderDate.setFullYear(new Date().getFullYear() - Math.floor(Math.random() * 2));

        const account = accounts[Math.floor(Math.random() * accounts.length)];
        const randomSuffix = Math.floor(Math.random() * 1000);

        customers.push({
            Id: i,
            Account: `${account} ${randomSuffix}`,
            CustomerRating: Math.floor(Math.random() * 5) + 1, // 1-5 rating
            Region: regions[Math.floor(Math.random() * regions.length)],
            SalesPerson: salesPeople[Math.floor(Math.random() * salesPeople.length)],
            NumberOfSeats: Math.floor(Math.random() * 500) + 1, // 1-500 seats
            OrderDate: orderDate,
            Bookings: Math.round((Math.random() * 500000 + 5000) * 100) / 100, // $5,000 - $505,000
            Discount: Math.round(Math.random() * 30 * 100) / 100, // 0-30%
            OrderType: orderTypes[Math.floor(Math.random() * orderTypes.length)],
            LicenseType: licenseTypes[Math.floor(Math.random() * licenseTypes.length)],
            Product: products[Math.floor(Math.random() * products.length)],
            ContactEmail: `contact${i}@${account.toLowerCase().replace(/\s+/g, '')}.com`,
            ContactPhone: `+1-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${
                Math.floor(Math.random() * 9000) + 1000
            }`,
            Industry: industries[Math.floor(Math.random() * industries.length)],
            Status: statuses[Math.floor(Math.random() * statuses.length)]
        });
    }
    return customers;
}

// Generate 2000 rows
const generatedCustomers = generateCustomers(2000);

// Calculate sum of bookings per salesperson
const salesPersonBookingsMap = generatedCustomers.reduce((acc, customer) => {
    acc[customer.SalesPerson] = (acc[customer.SalesPerson] || 0) + customer.Bookings;
    return acc;
}, {} as Record<string, number>);

// Add SalesPersonBookingsSum to each customer
const customers = generatedCustomers.map((customer) => ({
    ...customer,
    SalesPersonBookingsSum: Math.round(salesPersonBookingsMap[customer.SalesPerson] * 100) / 100
}));

const addColumnsValues = (columns) => {
    return columns.map((col) => {
        if (col.field === 'Region') {
            return {
                ...col,
                values: ['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East', 'Africa']
            };
        }
        if (col.field === 'OrderType') {
            return {
                ...col,
                values: ['New', 'Existing', 'Renewal']
            };
        }
        if (col.field === 'LicenseType') {
            return {
                ...col,
                values: ['Perpetual', 'Subscription']
            };
        }
        if (col.field === 'Product') {
            return {
                ...col,
                values: [
                    'Enterprise Suite',
                    'Professional Edition',
                    'Standard Package',
                    'Premium Bundle',
                    'Developer Tools',
                    'Analytics Platform',
                    'Cloud Services',
                    'Mobile Solutions'
                ]
            };
        }
        if (col.field === 'Industry') {
            return {
                ...col,
                values: [
                    'Technology',
                    'Healthcare',
                    'Finance',
                    'Retail',
                    'Manufacturing',
                    'Education',
                    'Government',
                    'Entertainment'
                ]
            };
        }
        if (col.field === 'Status') {
            return {
                ...col,
                values: ['Active', 'Pending', 'Completed', 'In Review']
            };
        }
        if (col.field === 'SalesPerson') {
            return {
                ...col,
                values: [
                    'Sarah Johnson',
                    'Michael Chen',
                    'Emma Williams',
                    'James Rodriguez',
                    'Olivia Martinez',
                    'David Kim',
                    'Sophia Patel',
                    'Daniel Brown',
                    'Ava Garcia',
                    'Matthew Lee'
                ]
            };
        }
        return col;
    });
};

export { customers, addColumnsValues };
