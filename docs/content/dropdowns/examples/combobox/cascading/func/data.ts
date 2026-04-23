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
    { productName: 'Ikura', productId: 5, categoryId: 3 },
    { productName: 'Konbu', productId: 6, categoryId: 3 }
];

const dataOrders = [
    { orderName: 'Cunewalde', orderId: 1, productId: 1 },
    { orderName: 'Albuquerque', orderId: 2, productId: 1 },
    { orderName: 'Geneva', orderId: 3, productId: 2 },
    { orderName: 'Graz', orderId: 4, productId: 2 },
    { orderName: 'London', orderId: 5, productId: 3 },
    { orderName: 'I. de Margarita', orderId: 6, productId: 3 },
    { orderName: 'Barquisimeto', orderId: 7, productId: 4 },
    { orderName: 'Brandenburg', orderId: 8, productId: 4 },
    { orderName: 'Cunewalde', orderId: 9, productId: 5 },
    { orderName: 'Mexico D.F.', orderId: 10, productId: 5 },
    { orderName: 'Mexico D.F.', orderId: 11, productId: 6 },
    { orderName: 'Rio de Janeiro', orderId: 12, productId: 6 }
];

export { dataCategories, dataProducts, dataOrders };
