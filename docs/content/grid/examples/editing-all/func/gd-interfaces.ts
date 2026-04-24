export interface Product {
    ProductID: number | null;
    ProductName?: string;
    SupplierID?: number;
    CategoryID?: number;
    QuantityPerUnit?: string;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    Discontinued?: boolean;
    expanded?: boolean;
    inEdit?: boolean | string;
    locked?: boolean;
}
