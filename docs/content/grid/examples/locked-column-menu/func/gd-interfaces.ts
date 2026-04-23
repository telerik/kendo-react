export interface ProductCategory {
    CategoryID?: number;
    CategoryName?: string;
    Description?: string;
    details?: any;
}

export interface Product {
    ProductID: number;
    ProductName?: string;
    SupplierID?: number;
    CategoryID?: number;
    QuantityPerUnit?: string;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    Discontinued?: boolean;
    Category?: ProductCategory;
    expanded?: boolean;
    inEdit?: boolean | string;
    locked?: boolean;
}

export interface columnInterface {
    title?: string;
    field?: string;
    show?: boolean;
    filter?: 'boolean' | 'numeric' | 'text' | 'date' | undefined;
    minWidth?: number;
    minGridWidth?: number;
    locked?: boolean;
    width?: string | number;
}
