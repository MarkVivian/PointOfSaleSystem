import { StaticImageData } from "next/image";

export interface valueStateInterface{
    name : string, 
    link : string, 
    description : string,
    image : string | StaticImageData
}