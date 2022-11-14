export interface Products{
    productId: string,
    qty: number
}
export interface Order {
    userId: string,
    client: string, 
    products: object
}
export interface OrderRpta{
    id: string, 
    userId: string,
    client: string,
    products: Products,
    
}
