export default function GetDatePositions(Word:string, position:string):string{
    const [year, month, day] = Word.split("-")
    var info=""
    switch (position) {
        case "Center":
            info = month
            break;
            
        case "First":
            info = year
            break;

        case "Last":
            info=day
            break;   

        default:
            info=""
            break;
    }
    return info
}