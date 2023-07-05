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