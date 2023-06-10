export default function FilterData<T> (values : T[], specificText: string, getProperty : (item : T)=>string):T[]{
    const Data =  values.filter((item)=>getProperty(item).includes(specificText))
    return Data.sort()
}