export default function CheckIfEmpty(fields: string[]): boolean {
    var State=false;
   for(var i=0; i<fields.length; i++){
      if(fields[i] === ""){ 
        State=true
      }
   }
    return State!;
  }