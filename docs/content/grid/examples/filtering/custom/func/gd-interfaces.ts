export interface ProductCategory {
    CategoryID: number;
    CategoryName: string;
    Description: string;
    details?: any;
}

export interface Product {
    ProductID: number;
    ProductName?: string;
    UnitPrice?: number;
    Category: ProductCategory;
    inEdit?: boolean | string;
}
