export interface Product {
    ProductID: number;
    ProductName: string;
    UnitsInStock?: number;
    FirstOrderedOn?: Date;
    Discontinued?: boolean;
    inEdit?: boolean | string;
}
