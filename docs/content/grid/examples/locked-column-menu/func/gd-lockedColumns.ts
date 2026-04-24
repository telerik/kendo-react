const columns = [
    {
        title: 'Id',
        field: 'ProductID',
        locked: true,
        filter: 'numeric',
        width: 100
    },
    {
        title: 'Product Name',
        field: 'ProductName',
        locked: false,
        filter: 'text',
        width: 200
    },
    {
        title: 'Quantity',
        field: 'QuantityPerUnit',
        locked: false,
        filter: 'numeric',
        width: 100
    },
    {
        title: 'Price',
        field: 'UnitPrice',
        locked: false,
        filter: 'numeric',
        width: 100
    },
    {
        title: 'Units',
        field: 'UnitsInStock',
        locked: true,
        filter: 'numeric',
        width: 100
    },
    {
        title: 'Discontinued',
        field: 'Discontinued',
        locked: false,
        filter: 'boolean'
    }
];

export default columns;
