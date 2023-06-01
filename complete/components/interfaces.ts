export interface Products{
    ProductId : number
    ProductName : string,
    ProductCount : number,
    ProductCost : number,
    Editstate? : boolean
}

export interface Orders{
    OrderId : number,
    OrderedItem : string,
    OrderDate : string, 
    ArrivalDate : string,
    OrderCount : number,
    Editstate? : boolean  
}

export interface Static{
    id : number,
    StaticItem : string,
    StaticCount : number,
    StaticPrice : number
}

export interface propInterface{
    params : {
        content : string
    },
    searchParams : {
        searchQuery : string
    }
}

export interface ProductsInterface{
        ProductName : string,
        ProductCount : number,
        ProductCost : number
}

export interface OrdersInterface {
    OrderedItem : string,
    OrderDate : string,
    ArrivalDate : string,
    OrderCount : number 
}

