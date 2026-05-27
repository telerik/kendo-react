export interface Product {
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
    UnitsInStock: number;
    Discontinued: boolean;
    order?: number;
    Category: {
        CategoryName: string;
    };
}

export const products: Product[] = [
    { ProductID: 1, ProductName: 'Chai', UnitPrice: 18, UnitsInStock: 39, Discontinued: false, Category: { CategoryName: 'Beverages' } },
    { ProductID: 2, ProductName: 'Chang', UnitPrice: 19, UnitsInStock: 17, Discontinued: false, Category: { CategoryName: 'Beverages' } },
    { ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 10, UnitsInStock: 13, Discontinued: false, Category: { CategoryName: 'Condiments' } },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitPrice: 22, UnitsInStock: 53, Discontinued: false, Category: { CategoryName: 'Condiments' } },
    { ProductID: 5, ProductName: "Chef Anton's Gumbo Mix", UnitPrice: 21.35, UnitsInStock: 0, Discontinued: true, Category: { CategoryName: 'Condiments' } },
    { ProductID: 6, ProductName: "Grandma's Boysenberry Spread", UnitPrice: 25, UnitsInStock: 120, Discontinued: false, Category: { CategoryName: 'Condiments' } },
    { ProductID: 7, ProductName: "Uncle Bob's Organic Dried Pears", UnitPrice: 30, UnitsInStock: 15, Discontinued: false, Category: { CategoryName: 'Produce' } },
    { ProductID: 8, ProductName: 'Northwoods Cranberry Sauce', UnitPrice: 40, UnitsInStock: 6, Discontinued: false, Category: { CategoryName: 'Condiments' } },
    { ProductID: 9, ProductName: 'Mishi Kobe Niku', UnitPrice: 97, UnitsInStock: 29, Discontinued: true, Category: { CategoryName: 'Meat/Poultry' } },
    { ProductID: 10, ProductName: 'Ikura', UnitPrice: 31, UnitsInStock: 31, Discontinued: false, Category: { CategoryName: 'Seafood' } },
    { ProductID: 11, ProductName: 'Queso Cabrales', UnitPrice: 21, UnitsInStock: 22, Discontinued: false, Category: { CategoryName: 'Dairy Products' } },
    { ProductID: 12, ProductName: 'Queso Manchego La Pastora', UnitPrice: 38, UnitsInStock: 86, Discontinued: false, Category: { CategoryName: 'Dairy Products' } },
    { ProductID: 13, ProductName: 'Konbu', UnitPrice: 6, UnitsInStock: 24, Discontinued: false, Category: { CategoryName: 'Seafood' } },
    { ProductID: 14, ProductName: 'Tofu', UnitPrice: 23.25, UnitsInStock: 35, Discontinued: false, Category: { CategoryName: 'Produce' } },
    { ProductID: 15, ProductName: 'Genen Shouyu', UnitPrice: 15.5, UnitsInStock: 39, Discontinued: false, Category: { CategoryName: 'Condiments' } }
];
