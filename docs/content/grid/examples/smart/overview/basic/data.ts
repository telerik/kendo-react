type Customer = {
    Id: number;
    CustomerName: string;
    Amount: number;
    Fee: number;
    Currency: string;
    Status: string;
    TransType: string;
    AccountType: string;
    TransDate: Date;
    Description: string;
    Region: string;
};

function generateCustomers(count: number): Customer[] {
    const names = [
        'Emma Johnson',
        'Lucas Brown',
        'Olivia King',
        'Isabella Lee',
        'Mia Davis',
        'Ethan Wilson',
        'Sophia Turner',
        'Noah Smith',
        'James Miller',
        'Charlotte Wilson'
    ];
    const currencies = ['USD', 'EUR'];
    const statuses = ['Completed', 'Pending', 'Failed'];
    const transTypes = ['Deposit', 'Withdrawal', 'Transfer'];
    const accountTypes = ['Checking', 'Savings', 'Business'];
    const descriptions = [
        'Paycheck Deposit',
        'Bank Withdrawal',
        'Failed ATM Withdrawal',
        'Supplier Payment',
        'Counter Withdrawal',
        'Direct Deposit',
        'Online Transfer',
        'Invoice Payment',
        'ATM Withdrawal',
        'Bonus Deposit'
    ];
    const regions = ['East', 'West', 'North', 'South'];

    const customers: Customer[] = [];
    for (let i = 1; i <= count; i++) {
        const transDate = new Date();
        transDate.setDate(transDate.getDate() - Math.floor(Math.random() * 365));
        transDate.setFullYear(new Date().getFullYear());

        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // A-Z
        const randomLetters = Array.from({ length: 3 }, () =>
            String.fromCharCode(97 + Math.floor(Math.random() * 26))
        ).join(''); // a-z
        const name = `${names[Math.floor(Math.random() * names.length)]} ${randomLetter}${randomLetters}`;
        customers.push({
            Id: i,
            CustomerName: name,
            Amount: Math.round((Math.random() * 40000 - 2000) * 100) / 100,
            Fee: Math.round(Math.random() * 12 * 100) / 100,
            Currency: currencies[Math.floor(Math.random() * currencies.length)],
            Status: statuses[Math.floor(Math.random() * statuses.length)],
            TransType: transTypes[Math.floor(Math.random() * transTypes.length)],
            AccountType: accountTypes[Math.floor(Math.random() * accountTypes.length)],
            TransDate: transDate,
            Description: descriptions[Math.floor(Math.random() * descriptions.length)],
            Region: regions[Math.floor(Math.random() * regions.length)]
        });
    }
    return customers;
}

// Example usage:
const customers = generateCustomers(1000);

const addColumnsValues = (columns) => {
    return columns.map((col) => {
        if (col.field === 'Currency') {
            return {
                ...col,
                values: ['USD', 'EUR']
            };
        }
        if (col.field === 'Status') {
            return {
                ...col,
                values: ['Completed', 'Pending', 'Failed']
            };
        }
        if (col.field === 'TransType') {
            return {
                ...col,
                values: ['Deposit', 'Withdrawal', 'Transfer']
            };
        }
        if (col.field === 'AccountType') {
            return {
                ...col,
                values: ['Checking', 'Savings', 'Business']
            };
        }
        if (col.field === 'Region') {
            return {
                ...col,
                values: ['East', 'West', 'North', 'South']
            };
        }
        return col;
    });
};

export { customers, addColumnsValues };
