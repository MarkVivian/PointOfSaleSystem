import { compareTwoStrings } from "string-similarity";
export default function CheckIfSimilar(input : string, dataFromDatabase : string):string{
    var exactValue = ""
    const comparison:boolean = compareTwoStrings(input, dataFromDatabase) > 0.5 ? true : false;
    if(comparison){
        exactValue = dataFromDatabase
    }
    return exactValue
}