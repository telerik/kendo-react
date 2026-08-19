export interface Order {
    OrderID: number;
    Customer: string;
    Product: string;
    Category: string;
    Amount: number;
    Quantity: number;
    OrderDate: Date;
    Status: string;
    Fulfilled: boolean;
}

export const orders: Order[] = [
    {
        OrderID: 1001,
        Customer: 'Alice Johnson',
        Product: 'Wireless Headphones',
        Category: 'Electronics',
        Amount: 89.99,
        Quantity: 1,
        OrderDate: new Date(2026, 5, 12),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1002,
        Customer: 'Bob Martinez',
        Product: 'Running Shoes',
        Category: 'Apparel',
        Amount: 119.95,
        Quantity: 1,
        OrderDate: new Date(2026, 5, 11),
        Status: 'Shipped',
        Fulfilled: false
    },
    {
        OrderID: 1003,
        Customer: 'Carol White',
        Product: 'Air Purifier',
        Category: 'Home',
        Amount: 249.0,
        Quantity: 1,
        OrderDate: new Date(2026, 5, 10),
        Status: 'Processing',
        Fulfilled: false
    },
    {
        OrderID: 1004,
        Customer: 'David Lee',
        Product: 'Smart Watch',
        Category: 'Electronics',
        Amount: 299.0,
        Quantity: 1,
        OrderDate: new Date(2026, 5, 9),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1005,
        Customer: 'Emma Wilson',
        Product: 'Yoga Mat',
        Category: 'Apparel',
        Amount: 34.99,
        Quantity: 2,
        OrderDate: new Date(2026, 5, 8),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1006,
        Customer: 'Frank Chen',
        Product: 'Coffee Maker',
        Category: 'Home',
        Amount: 129.99,
        Quantity: 1,
        OrderDate: new Date(2026, 5, 7),
        Status: 'Shipped',
        Fulfilled: false
    },
    {
        OrderID: 1007,
        Customer: 'Grace Kim',
        Product: 'Protein Powder',
        Category: 'Health',
        Amount: 49.99,
        Quantity: 3,
        OrderDate: new Date(2026, 5, 6),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1008,
        Customer: 'Henry Taylor',
        Product: 'Laptop Stand',
        Category: 'Electronics',
        Amount: 79.99,
        Quantity: 1,
        OrderDate: new Date(2026, 5, 5),
        Status: 'Pending',
        Fulfilled: false
    },
    {
        OrderID: 1009,
        Customer: 'Isabella Brown',
        Product: 'Sports Jacket',
        Category: 'Apparel',
        Amount: 149.0,
        Quantity: 1,
        OrderDate: new Date(2026, 5, 4),
        Status: 'Processing',
        Fulfilled: false
    },
    {
        OrderID: 1010,
        Customer: 'James Davis',
        Product: 'Bluetooth Speaker',
        Category: 'Electronics',
        Amount: 59.99,
        Quantity: 2,
        OrderDate: new Date(2026, 5, 3),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1011,
        Customer: 'Katherine Miller',
        Product: 'Vitamin D Supplements',
        Category: 'Health',
        Amount: 19.99,
        Quantity: 4,
        OrderDate: new Date(2026, 5, 2),
        Status: 'Shipped',
        Fulfilled: false
    },
    {
        OrderID: 1012,
        Customer: 'Liam Garcia',
        Product: 'Desk Lamp',
        Category: 'Home',
        Amount: 39.99,
        Quantity: 1,
        OrderDate: new Date(2026, 5, 1),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1013,
        Customer: 'Mia Robinson',
        Product: 'Fitness Tracker',
        Category: 'Health',
        Amount: 89.99,
        Quantity: 1,
        OrderDate: new Date(2026, 4, 30),
        Status: 'Pending',
        Fulfilled: false
    },
    {
        OrderID: 1014,
        Customer: 'Nathan Clark',
        Product: 'USB-C Hub',
        Category: 'Electronics',
        Amount: 45.0,
        Quantity: 2,
        OrderDate: new Date(2026, 4, 28),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1015,
        Customer: 'Olivia Lewis',
        Product: 'Winter Coat',
        Category: 'Apparel',
        Amount: 199.0,
        Quantity: 1,
        OrderDate: new Date(2026, 4, 27),
        Status: 'Cancelled',
        Fulfilled: false
    },
    {
        OrderID: 1016,
        Customer: 'Patrick Hall',
        Product: 'Water Bottle',
        Category: 'Health',
        Amount: 24.99,
        Quantity: 3,
        OrderDate: new Date(2026, 4, 25),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1017,
        Customer: 'Quinn Young',
        Product: 'Plant Pot Set',
        Category: 'Home',
        Amount: 29.99,
        Quantity: 2,
        OrderDate: new Date(2026, 4, 23),
        Status: 'Shipped',
        Fulfilled: false
    },
    {
        OrderID: 1018,
        Customer: 'Rachel Allen',
        Product: 'Baseball Cap',
        Category: 'Apparel',
        Amount: 24.99,
        Quantity: 2,
        OrderDate: new Date(2026, 4, 21),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1019,
        Customer: 'Samuel Scott',
        Product: 'Garden Hose',
        Category: 'Home',
        Amount: 54.99,
        Quantity: 1,
        OrderDate: new Date(2026, 4, 19),
        Status: 'Processing',
        Fulfilled: false
    },
    {
        OrderID: 1020,
        Customer: 'Tina Walker',
        Product: 'Resistance Bands',
        Category: 'Health',
        Amount: 29.99,
        Quantity: 2,
        OrderDate: new Date(2026, 4, 17),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1021,
        Customer: 'Alice Johnson',
        Product: 'Smart Watch',
        Category: 'Electronics',
        Amount: 299.0,
        Quantity: 1,
        OrderDate: new Date(2026, 4, 15),
        Status: 'Shipped',
        Fulfilled: false
    },
    {
        OrderID: 1022,
        Customer: 'Bob Martinez',
        Product: 'Coffee Maker',
        Category: 'Home',
        Amount: 129.99,
        Quantity: 1,
        OrderDate: new Date(2026, 4, 13),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1023,
        Customer: 'Carol White',
        Product: 'Fitness Tracker',
        Category: 'Health',
        Amount: 89.99,
        Quantity: 1,
        OrderDate: new Date(2026, 4, 11),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1024,
        Customer: 'David Lee',
        Product: 'Yoga Mat',
        Category: 'Apparel',
        Amount: 34.99,
        Quantity: 1,
        OrderDate: new Date(2026, 4, 9),
        Status: 'Pending',
        Fulfilled: false
    },
    {
        OrderID: 1025,
        Customer: 'Emma Wilson',
        Product: 'Air Purifier',
        Category: 'Home',
        Amount: 249.0,
        Quantity: 1,
        OrderDate: new Date(2026, 4, 7),
        Status: 'Processing',
        Fulfilled: false
    },
    {
        OrderID: 1026,
        Customer: 'Frank Chen',
        Product: 'Wireless Headphones',
        Category: 'Electronics',
        Amount: 89.99,
        Quantity: 2,
        OrderDate: new Date(2026, 4, 5),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1027,
        Customer: 'Grace Kim',
        Product: 'Sports Jacket',
        Category: 'Apparel',
        Amount: 149.0,
        Quantity: 1,
        OrderDate: new Date(2026, 4, 3),
        Status: 'Shipped',
        Fulfilled: false
    },
    {
        OrderID: 1028,
        Customer: 'Henry Taylor',
        Product: 'Protein Powder',
        Category: 'Health',
        Amount: 49.99,
        Quantity: 2,
        OrderDate: new Date(2026, 4, 1),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1029,
        Customer: 'Isabella Brown',
        Product: 'USB-C Hub',
        Category: 'Electronics',
        Amount: 45.0,
        Quantity: 1,
        OrderDate: new Date(2026, 3, 28),
        Status: 'Cancelled',
        Fulfilled: false
    },
    {
        OrderID: 1030,
        Customer: 'James Davis',
        Product: 'Desk Lamp',
        Category: 'Home',
        Amount: 39.99,
        Quantity: 2,
        OrderDate: new Date(2026, 3, 25),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1031,
        Customer: 'Katherine Miller',
        Product: 'Running Shoes',
        Category: 'Apparel',
        Amount: 119.95,
        Quantity: 1,
        OrderDate: new Date(2026, 3, 22),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1032,
        Customer: 'Liam Garcia',
        Product: 'Bluetooth Speaker',
        Category: 'Electronics',
        Amount: 59.99,
        Quantity: 1,
        OrderDate: new Date(2026, 3, 19),
        Status: 'Processing',
        Fulfilled: false
    },
    {
        OrderID: 1033,
        Customer: 'Mia Robinson',
        Product: 'Water Bottle',
        Category: 'Health',
        Amount: 24.99,
        Quantity: 4,
        OrderDate: new Date(2026, 3, 16),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1034,
        Customer: 'Nathan Clark',
        Product: 'Winter Coat',
        Category: 'Apparel',
        Amount: 199.0,
        Quantity: 1,
        OrderDate: new Date(2026, 3, 13),
        Status: 'Shipped',
        Fulfilled: false
    },
    {
        OrderID: 1035,
        Customer: 'Olivia Lewis',
        Product: 'Laptop Stand',
        Category: 'Electronics',
        Amount: 79.99,
        Quantity: 2,
        OrderDate: new Date(2026, 3, 10),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1036,
        Customer: 'Patrick Hall',
        Product: 'Garden Hose',
        Category: 'Home',
        Amount: 54.99,
        Quantity: 1,
        OrderDate: new Date(2026, 3, 7),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1037,
        Customer: 'Quinn Young',
        Product: 'Vitamin D Supplements',
        Category: 'Health',
        Amount: 19.99,
        Quantity: 6,
        OrderDate: new Date(2026, 3, 4),
        Status: 'Pending',
        Fulfilled: false
    },
    {
        OrderID: 1038,
        Customer: 'Rachel Allen',
        Product: 'Smart Watch',
        Category: 'Electronics',
        Amount: 299.0,
        Quantity: 1,
        OrderDate: new Date(2026, 3, 1),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1039,
        Customer: 'Samuel Scott',
        Product: 'Yoga Mat',
        Category: 'Apparel',
        Amount: 34.99,
        Quantity: 3,
        OrderDate: new Date(2026, 2, 28),
        Status: 'Shipped',
        Fulfilled: false
    },
    {
        OrderID: 1040,
        Customer: 'Tina Walker',
        Product: 'Air Purifier',
        Category: 'Home',
        Amount: 249.0,
        Quantity: 1,
        OrderDate: new Date(2026, 2, 25),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1041,
        Customer: 'Alice Johnson',
        Product: 'Resistance Bands',
        Category: 'Health',
        Amount: 29.99,
        Quantity: 2,
        OrderDate: new Date(2026, 2, 22),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1042,
        Customer: 'Bob Martinez',
        Product: 'USB-C Hub',
        Category: 'Electronics',
        Amount: 45.0,
        Quantity: 3,
        OrderDate: new Date(2026, 2, 19),
        Status: 'Processing',
        Fulfilled: false
    },
    {
        OrderID: 1043,
        Customer: 'Carol White',
        Product: 'Baseball Cap',
        Category: 'Apparel',
        Amount: 24.99,
        Quantity: 3,
        OrderDate: new Date(2026, 2, 16),
        Status: 'Delivered',
        Fulfilled: true
    },
    {
        OrderID: 1044,
        Customer: 'David Lee',
        Product: 'Coffee Maker',
        Category: 'Home',
        Amount: 129.99,
        Quantity: 1,
        OrderDate: new Date(2026, 2, 13),
        Status: 'Cancelled',
        Fulfilled: false
    },
    {
        OrderID: 1045,
        Customer: 'Emma Wilson',
        Product: 'Wireless Headphones',
        Category: 'Electronics',
        Amount: 89.99,
        Quantity: 1,
        OrderDate: new Date(2026, 2, 10),
        Status: 'Delivered',
        Fulfilled: true
    }
];
