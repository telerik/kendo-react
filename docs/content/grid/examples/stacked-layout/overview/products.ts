export interface Country {
    CountryNameShort: string;
    CountryNameLong: string;
}

export interface Product {
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
    Discontinued: boolean;
    TargetSales: number;
    Country: Country;
    UnitsInStock: number;
}

export const products: Product[] = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        UnitPrice: 18.0,
        Discontinued: false,
        TargetSales: 75,
        Country: { CountryNameShort: 'us', CountryNameLong: 'United States' },
        UnitsInStock: 39
    },
    {
        ProductID: 2,
        ProductName: 'Chang',
        UnitPrice: 19.0,
        Discontinued: false,
        TargetSales: 82,
        Country: { CountryNameShort: 'gb', CountryNameLong: 'United Kingdom' },
        UnitsInStock: 17
    },
    {
        ProductID: 3,
        ProductName: 'Aniseed Syrup',
        UnitPrice: 10.0,
        Discontinued: false,
        TargetSales: 45,
        Country: { CountryNameShort: 'de', CountryNameLong: 'Germany' },
        UnitsInStock: 13
    },
    {
        ProductID: 4,
        ProductName: "Chef Anton's Cajun Seasoning",
        UnitPrice: 22.0,
        Discontinued: false,
        TargetSales: 90,
        Country: { CountryNameShort: 'fr', CountryNameLong: 'France' },
        UnitsInStock: 53
    },
    {
        ProductID: 5,
        ProductName: "Chef Anton's Gumbo Mix",
        UnitPrice: 21.35,
        Discontinued: true,
        TargetSales: 30,
        Country: { CountryNameShort: 'us', CountryNameLong: 'United States' },
        UnitsInStock: 0
    },
    {
        ProductID: 6,
        ProductName: "Grandma's Boysenberry Spread",
        UnitPrice: 25.0,
        Discontinued: false,
        TargetSales: 68,
        Country: { CountryNameShort: 'gb', CountryNameLong: 'United Kingdom' },
        UnitsInStock: 120
    },
    {
        ProductID: 7,
        ProductName: "Uncle Bob's Organic Dried Pears",
        UnitPrice: 30.0,
        Discontinued: false,
        TargetSales: 55,
        Country: { CountryNameShort: 'de', CountryNameLong: 'Germany' },
        UnitsInStock: 15
    },
    {
        ProductID: 8,
        ProductName: 'Northwoods Cranberry Sauce',
        UnitPrice: 40.0,
        Discontinued: false,
        TargetSales: 88,
        Country: { CountryNameShort: 'fr', CountryNameLong: 'France' },
        UnitsInStock: 6
    },
    {
        ProductID: 9,
        ProductName: 'Mishi Kobe Niku',
        UnitPrice: 97.0,
        Discontinued: true,
        TargetSales: 20,
        Country: { CountryNameShort: 'jp', CountryNameLong: 'Japan' },
        UnitsInStock: 29
    },
    {
        ProductID: 10,
        ProductName: 'Ikura',
        UnitPrice: 31.0,
        Discontinued: false,
        TargetSales: 72,
        Country: { CountryNameShort: 'jp', CountryNameLong: 'Japan' },
        UnitsInStock: 31
    },
    {
        ProductID: 11,
        ProductName: 'Queso Cabrales',
        UnitPrice: 21.0,
        Discontinued: false,
        TargetSales: 60,
        Country: { CountryNameShort: 'es', CountryNameLong: 'Spain' },
        UnitsInStock: 22
    },
    {
        ProductID: 12,
        ProductName: 'Queso Manchego La Pastora',
        UnitPrice: 38.0,
        Discontinued: false,
        TargetSales: 85,
        Country: { CountryNameShort: 'es', CountryNameLong: 'Spain' },
        UnitsInStock: 86
    },
    {
        ProductID: 13,
        ProductName: 'Konbu',
        UnitPrice: 6.0,
        Discontinued: false,
        TargetSales: 40,
        Country: { CountryNameShort: 'jp', CountryNameLong: 'Japan' },
        UnitsInStock: 24
    },
    {
        ProductID: 14,
        ProductName: 'Tofu',
        UnitPrice: 23.25,
        Discontinued: false,
        TargetSales: 65,
        Country: { CountryNameShort: 'jp', CountryNameLong: 'Japan' },
        UnitsInStock: 35
    },
    {
        ProductID: 15,
        ProductName: 'Genen Shouyu',
        UnitPrice: 15.5,
        Discontinued: false,
        TargetSales: 50,
        Country: { CountryNameShort: 'jp', CountryNameLong: 'Japan' },
        UnitsInStock: 39
    }
];
