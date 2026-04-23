export interface Product {
    ProductID: number;
    ProductName: string;
    Discontinued: boolean;
  }

  export interface MyCustomItemProps {
    dataItem?: Product;
    listBoxType: string;
    [key: string]: any;
  }
