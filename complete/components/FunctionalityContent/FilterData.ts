export default function FilterData(values : string[], specificText: string){
    const filteredData:string[]= [];
    values.map((item)=>{
        if(item.toLowerCase().includes(specificText.toLowerCase())){
            filteredData.push(item)
        }
    })
    return filteredData;
}