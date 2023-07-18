import { StaticImageData } from "next/image";
import { RefObject } from "react";

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

export interface orderInterface{
    orderItem : string,
    orderCount : number,
    orderDate : string,
    arrivalDate : string,
    orderId : number
}

export interface productInterface{
    productName : string,
    productDescription : string,
    productCount : number,
    productCost : number,
    productImage : string,
    productId : number
}

export interface DialogInputInterface{
    buttonReference : RefObject<HTMLButtonElement>, 
    dialogReference : RefObject<HTMLDialogElement>, 
    type : string, 
    changeModifierFunction : (events: React.ChangeEvent<HTMLInputElement>)=> void, 
    addinfo : addInfointerface
}

export interface dialogValuesInterface{
        orders: {
            h1Value: string;
            inputType: string;
            nameValue: string;
            inputValue: string | number;
        }[];
        products: {
            h1Value: string;
            inputType: string;
            nameValue: string;
            inputValue: string | number;
        }[];
}

export interface stateManagementInterface{
    modifyState : Boolean,
    deleteState : Boolean,
    showImages? : Boolean
}

export interface boughtProductsInterface{
    name : string,
    cost : number,
    count : number,
    id : number
}