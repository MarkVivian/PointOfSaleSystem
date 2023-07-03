import { StaticImageData } from "next/image";

export interface valueStateInterface{
    name : string, 
    link : string, 
    description : string,
    image : string | StaticImageData
}

export interface topFeatureShowControl{
        locateState : Boolean,
        locateText : string,
        delete : Boolean,
        modify : Boolean,
        clearState : Boolean
}

export interface addInfointerface{
    orderItem : string,
    orderCount : number,
    orderDate : string,
    arrivalDate : string,
    productName : string,
    productDescription : string,
    productCount : number,
    productCost : number,
    productImage : string
}