export default function FilterData<T> (values : T[], specificText: string, getProperty : (item : T)=>string):T[]{
    return values.filter((item)=>getProperty(item).includes(specificText))
}