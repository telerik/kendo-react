export interface Product {
    ProductID: number | null;
    ProductName?: string;
    UnitsInStock?: number;
    FirstOrderedOn?: Date;
    ProductNameValid: string;
    UnitsInStockValid: string;
    FirstOrderedOnValid: string;
    inEdit?: boolean | string;
}
