import { Orders, Products } from "@/Database/Database"
import ContentPage from "@/components/FunctionalityContent/ContentPage"
interface propInterface{
  params : {
      pages : string
  },
  searchParams : {
      searchQuery : string
  }
}

const Content = async ({searchParams}:propInterface) => {
  var Products:Products[] | any;
  var Orders:Orders[] | any;
  if(searchParams.searchQuery === "Products"){
      Products = await GetData("Products")
  }else if(searchParams.searchQuery === "Orders"){
    Orders = await GetData("Orders")
  }
  return (
    <>
      <ContentPage searchQuery={searchParams.searchQuery} ProductsData={Products!} ordersData={Orders!}/>
    </>
  )
}

export default Content

async function GetData(table:string){
    return new Promise(async (resolve, reject)=>{
      try{
        const info = await fetch("http://localhost:3000/DatabaseInfo/GetData", {
          method : "POST",
          next : {
            revalidate : 10
          },
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