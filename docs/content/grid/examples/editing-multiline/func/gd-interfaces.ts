export interface Product {
    ProductID: number;
    ProductName?: string;
    FirstOrderedOn?: Date;
    UnitsInStock?: number;
    Discontinued?: boolean;
    inEdit?: boolean | string;
    new?: boolean;
}
