export interface OrderShipAddress {
    street: string;
    city: string;
    region: string;
    postalCode: number;
    country: string;
}

export interface OrderDetails {
    productID: number;
    unitPrice: number;
    quantity: number;
    discount: number;
}
export interface Order {
    Index?: number;
    OrderID?: number;
    ShipName?: string;
    ShipCountry?: string;
}
