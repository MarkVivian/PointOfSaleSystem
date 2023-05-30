import ContentPage from "./ContentPage"
interface Products{
  ProductId : number
  ProductName : string,
  ProductCount : number,
  ProductCost : number,
  Editstate? : boolean
}
interface Orders{
  OrderId : number,
  OrderedItem : string,
  OrderDate : string, 
  ArrivalDate : string,
  OrderCount : number,
  Editstate? : boolean  
}
interface propInterface{
  params : {
      content : string
  },
  searchParams : {
      searchQuery : string
  }
}

export async function generateStaticParams(){
    const paths = ["Orders/Orders", "Products/Orders"]
    return paths.map((item)=>{
      return{
        content : item
      }
    })
}

const Content = async ({params}:propInterface) => {
  var Products:Products[] | any;
  var Orders:Orders[] | any;
  if(params.content === "Products"){
      Products = await GetData("Products")
  }else if(params.content === "Orders"){
    Orders = await GetData("Orders")
  }
  return (
    <>
      <ContentPage searchQuery={params.content!} ProductsData={Products!} ordersData={Orders!}/>
    </>
  )
}

export default Content

async function GetData(table:string){
    return new Promise(async (resolve, reject)=>{
      try{  
        const info = await fetch("http://localhost:3000/DatabaseInfo/GetData", {
          method : "POST",
          cache : "no-cache",
          headers: {
            'Content-Type': 'application/json', // Set the appropriate Content-Type header
            // Additional headers if needed
            // ...
          },
          body: JSON.stringify({"Name" : table})
        })
        const response = await info.json()
        resolve(response)
      }catch(err){
        console.error("an error occured while getting the data")
        reject(err)
      }
    })
   
}