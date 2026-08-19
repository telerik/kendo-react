export interface CategoryProduct {
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
    UnitsInStock: number;
    Discontinued: boolean;
}

export interface ProductCategory {
    CategoryID: number;
    CategoryName: string;
    Description: string;
    products: CategoryProduct[];
}

export const categories: ProductCategory[] = [
    {
        CategoryID: 1,
        CategoryName: 'Beverages',
        Description: 'Soft drinks, coffees, teas, beers, and ales',
        products: [
            { ProductID: 1, ProductName: 'Chai', UnitPrice: 18, UnitsInStock: 39, Discontinued: false },
            { ProductID: 2, ProductName: 'Chang', UnitPrice: 19, UnitsInStock: 17, Discontinued: false }
        ]
    },
    {
        CategoryID: 2,
        CategoryName: 'Condiments',
        Description: 'Sweet and savory sauces, relishes, spreads, and seasonings',
        products: [
            { ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 10, UnitsInStock: 13, Discontinued: false },
            {
                ProductID: 4,
                ProductName: "Chef Anton's Cajun Seasoning",
                UnitPrice: 22,
                UnitsInStock: 53,
                Discontinued: false
            },
            {
                ProductID: 5,
                ProductName: "Chef Anton's Gumbo Mix",
                UnitPrice: 21.35,
                UnitsInStock: 0,
                Discontinued: true
            }
        ]
    },
    {
        CategoryID: 4,
        CategoryName: 'Dairy Products',
        Description: 'Cheeses',
        products: [
            { ProductID: 11, ProductName: 'Queso Cabrales', UnitPrice: 21, UnitsInStock: 22, Discontinued: false },
            {
                ProductID: 12,
                ProductName: 'Queso Manchego La Pastora',
                UnitPrice: 38,
                UnitsInStock: 86,
                Discontinued: false
            }
        ]
    },
    {
        CategoryID: 8,
        CategoryName: 'Seafood',
        Description: 'Seaweed and fish',
        products: [
            { ProductID: 10, ProductName: 'Ikura', UnitPrice: 31, UnitsInStock: 31, Discontinued: false },
            { ProductID: 13, ProductName: 'Konbu', UnitPrice: 6, UnitsInStock: 24, Discontinued: false }
        ]
    }
];
