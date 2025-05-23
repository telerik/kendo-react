function generateTransactions() {
    const merchantCategoryMap: Record<string, string> = {
        Starbucks: 'Food and Beverages',
        Amazon: 'Shopping',
        Sephora: 'Shopping',
        'Qatar Airways': 'Travel',
        'Apple Store': 'Shopping',
        Lidl: 'Food and Beverages',
        Concert: 'Leisure',
        Fitness: 'Leisure',
        Hermes: 'Shopping',
        Tesla: 'Travel',
        Uber: 'Travel',
        "McDonald's": 'Food and Beverages',
        Walmart: 'Shopping',
        Netflix: 'Leisure',
        Booking: 'Travel',
    };

    const transactions = Array.from({ length: 77 }, (_, index) => {
        const date = new Date();
        date.setDate(date.getDate() - index); // Spread dates across different days

        const merchant = Object.keys(merchantCategoryMap)[Math.floor(Math.random() * Object.keys(merchantCategoryMap).length)];

        return {
            id: index + 1,
            merchant,
            dateOfPurchase: date,
            orderStatus: ['Published', 'Pending', 'Postponed'][Math.floor(Math.random() * 3)] as
                | 'Published'
                | 'Pending'
                | 'Postponed'
                | 'N/A',
            category: merchantCategoryMap[merchant] as
                | 'Food and Beverages'
                | 'Shopping'
                | 'Travel'
                | 'Leisure'
                | 'N/A',
            paymentMethod: ['Debit Card', 'Credit Card', 'Bank Transfer'][Math.floor(Math.random() * 3)] as
                | 'Debit Card'
                | 'Credit Card'
                | 'Bank Transfer'
                | 'N/A',
            cardType: ['Visa', 'MasterCard'][Math.floor(Math.random() * 2)] as 'Visa' | 'MasterCard' | 'N/A',
            amount: parseFloat((Math.random() * 1000).toFixed(2)),
            transactionHash: `0x${Math.random().toString(16).substr(2, 20)}`,
            transactionHashFrom: `0x${Math.random().toString(16).substr(2, 20)}`,
            transactionHashTo: `0x${Math.random().toString(16).substr(2, 20)}`,
        };
    });

    return transactions;
}

export const gridTransactions = generateTransactions();