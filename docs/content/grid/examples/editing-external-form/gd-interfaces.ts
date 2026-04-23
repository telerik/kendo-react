export interface Product {
    ProductID: number;
    ProductName: string;
    UnitsInStock?: number;
    Discontinued?: boolean;
    inEdit?: boolean | string;
}
