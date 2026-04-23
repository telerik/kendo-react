export interface Product {
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
    UnitsInStock: number;
    Discontinued: boolean;
    Category: string;
    inEdit?: boolean | string;
}
