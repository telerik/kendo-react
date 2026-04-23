const dataCategories = [
    { categoryName: 'Beverages', categoryId: 1 },
    { categoryName: 'Condiments', categoryId: 2 },
    { categoryName: 'Seafood', categoryId: 3 }
];

const dataProducts = [
    { productName: 'Chai', productId: 1, categoryId: 1 },
    { productName: 'Chang', productId: 2, categoryId: 1 },
    { productName: 'Aniseed Syrup', productId: 3, categoryId: 2 },
    { productName: 'Genen Shouyu', productId: 4, categoryId: 2 },
    { productName: 'Ikura', productId: 5, categoryId: 3 }
];

const dataOrders = [
    { orderName: 'Cunewalde', orderId: 1, productId: 1 },
    { orderName: 'Albuquerque', orderId: 2, productId: 1 },
    { orderName: 'Geneva', orderId: 3, productId: 2 },
    { orderName: 'Graz', orderId: 4, productId: 2 },
    { orderName: 'London', orderId: 5, productId: 3 }
];

const productsTree = [
    {
        name: 'Beverages',
        id: 1,
        expanded: true,
        items: [
            { name: 'Chai', id: 2 },
            { name: 'Chang', id: 3 }
        ]
    },
    {
        name: 'Condiments',
        id: 4,
        items: [
            { name: 'Aniseed Syrup', id: 5 },
            { name: 'Genen Shouyu', id: 6 }
        ]
    },
    { name: 'Seafood', id: 7, items: [{ name: 'Ikura', id: 8 }] }
];

const employees = [
    {
        id: 1,
        name: 'Daryl Sweeney',
        reportsTo: null,
        phone: '(555) 924-9726',
        extension: 8253,
        hireDate: new Date('2012-02-07T20:00:00.000Z'),
        fullTime: true,
        position: 'CEO',
        timeInPosition: 2
    },
    {
        id: 2,
        name: 'Guy Wooten',
        reportsTo: 1,
        phone: '(438) 738-4935',
        extension: 1155,
        hireDate: new Date('2010-03-03T20:00:00.000Z'),
        fullTime: true,
        position: 'Chief Technical Officer',
        timeInPosition: 1
    },
    {
        id: 3,
        name: 'Priscilla Frank',
        reportsTo: 1,
        phone: '(278) 927-2684',
        extension: 4183,
        hireDate: new Date('2014-11-30T00:00:00.000Z'),
        fullTime: true,
        position: 'Chief Product Officer',
        timeInPosition: 2
    },
    {
        id: 4,
        name: 'Ursula Holmes',
        reportsTo: 3,
        phone: '(302) 760-2034',
        extension: 2226,
        hireDate: new Date('2011-06-06T00:00:00.000Z'),
        fullTime: true,
        position: 'EVP, Product Strategy',
        timeInPosition: 4
    },
    {
        id: 5,
        name: 'Anika Vega',
        reportsTo: 1,
        phone: '(910) 714-1802',
        extension: 6353,
        hireDate: new Date('2010-02-25T00:00:00.000Z'),
        fullTime: true,
        position: 'Chief Process Officer',
        timeInPosition: 5
    },
    {
        id: 6,
        name: 'Moses Duncan',
        reportsTo: 64,
        phone: '(421) 611-4814',
        extension: 669,
        hireDate: new Date('2010-05-24T00:00:00.000Z'),
        fullTime: true,
        position: 'Software Developer',
        timeInPosition: 6
    },
    {
        id: 7,
        name: 'Nevada Hart',
        reportsTo: 1,
        phone: '(254) 220-1576',
        extension: 6649,
        hireDate: new Date('2015-08-17T00:00:00.000Z'),
        fullTime: true,
        position: 'Chief Financial Officer',
        timeInPosition: 6
    },
    {
        id: 8,
        name: 'Hunter Fry',
        reportsTo: 1,
        phone: '(766) 358-9858',
        extension: 3741,
        hireDate: new Date('2011-02-12T00:00:00.000Z'),
        fullTime: false,
        position: 'General Counsel',
        timeInPosition: 3
    },
    {
        id: 9,
        name: 'Kuame Carrillo',
        reportsTo: 8,
        phone: '(192) 383-1305',
        extension: 9228,
        hireDate: new Date('2011-02-22T00:00:00.000Z'),
        fullTime: true,
        position: 'Associate General Councel',
        timeInPosition: 0
    },
    {
        id: 10,
        name: 'Vernon Ballard',
        reportsTo: 5,
        phone: '(702) 185-8890',
        extension: 9242,
        hireDate: new Date('2015-06-26T00:00:00.000Z'),
        fullTime: true,
        position: 'Director Facilities',
        timeInPosition: 2
    },
    {
        id: 11,
        name: 'Hyacinth Hood',
        reportsTo: 32,
        phone: '(889) 345-2438',
        extension: 8564,
        hireDate: new Date('2014-02-03T20:00:00.000Z'),
        fullTime: true,
        position: 'Team Lead',
        timeInPosition: 1
    },
    {
        id: 12,
        name: 'Jamalia Wallace',
        reportsTo: 64,
        phone: '(611) 391-8016',
        extension: 1952,
        hireDate: new Date('2011-09-08T00:00:00.000Z'),
        fullTime: true,
        position: 'Junior Designer',
        timeInPosition: 3
    },
    {
        id: 13,
        name: 'Stacy Todd',
        reportsTo: 8,
        phone: '(925) 286-3327',
        extension: 8565,
        hireDate: new Date('2014-07-05T00:00:00.000Z'),
        fullTime: true,
        position: 'Councel',
        timeInPosition: 0
    }
];
export { dataCategories, dataProducts, dataOrders, productsTree, employees };
