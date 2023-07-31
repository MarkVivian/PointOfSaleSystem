import { StaticImageData } from "next/image";
import { RefObject } from "react";

export interface leftNavbarInterface{
    name : string, 
    link : string, 
    description? : string,
    image? : string | StaticImageData,
    classnameValue? : string
}

export interface topFeatureShowControl{
        locateState : boolean,
        locateText : string,
        delete : boolean,
        modify : boolean,
        clearState : boolean
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
    productImage : File | null
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
    addinfo : addInfointerface,
    fileAddingModifier: (events: React.ChangeEvent<HTMLInputElement>)=> void
}

export interface dialogValuesInterface{
        orders: {
            h1Value: string,
            inputType: string,
            nameValue: string,
            inputValue: string | number,
            placeholder: string
        }[];
        products: {
            h1Value: string,
            inputType: string,
            nameValue: string,
            inputValue?: string | number,
            inputValues? : File,
            accept? : string
        }[];
}

export interface stateManagementInterface{
    modifyState : boolean,
    deleteState : boolean,
    showImages? : boolean
}

export interface boughtProductsInterface{
    name : string,
    cost : number,
    count : number,
    id : number
}

export interface graphDatainterface{
    id: number,
    year: number,
    userGain: number,
    userLost: number
}

export interface ChartInterface{
    labelName : string, 
    labelValues : string[], 
    dataValues : Number[]
}