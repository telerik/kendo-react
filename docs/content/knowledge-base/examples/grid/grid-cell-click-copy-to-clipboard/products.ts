interface Product {
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
    UnitsInStock: number;
    Discontinued: boolean;
    FirstOrderedOn: Date;
}

const sampleProducts: Product[] = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        UnitPrice: 18.0,
        UnitsInStock: 39,
        Discontinued: false,
        FirstOrderedOn: new Date('2023-01-15')
    },
    {
        ProductID: 2,
        ProductName: 'Chang',
        UnitPrice: 19.0,
        UnitsInStock: 17,
        Discontinued: false,
        FirstOrderedOn: new Date('2023-02-20')
    },
    {
        ProductID: 3,
        ProductName: 'Aniseed Syrup',
        UnitPrice: 10.0,
        UnitsInStock: 13,
        Discontinued: false,
        FirstOrderedOn: new Date('2023-03-10')
    },
    {
        ProductID: 4,
        ProductName: "Chef Anton's Cajun Seasoning",
        UnitPrice: 22.0,
        UnitsInStock: 53,
        Discontinued: false,
        FirstOrderedOn: new Date('2023-01-25')
    },
    {
        ProductID: 5,
        ProductName: "Chef Anton's Gumbo Mix",
        UnitPrice: 21.35,
        UnitsInStock: 0,
        Discontinued: true,
        FirstOrderedOn: new Date('2022-12-05')
    }
];
export default sampleProducts;
