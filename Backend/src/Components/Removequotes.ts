export default function RemoveQuotes(Info : string){
    let stringWithQuotes = `${Info}`;
    let stringWithoutQuotes = stringWithQuotes.replace(/"/g, '');
    return stringWithQuotes
}