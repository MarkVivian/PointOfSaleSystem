import Database, { Orders, Products } from "@/Database/Database"
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
  const DB = new Database()
  var Products:Products[]|Orders[];
  var Orders:Products[] | Orders[];
  if(searchParams.searchQuery === "Products"){
    Products = await DB.ReadDatabase("Products")
  }else if(searchParams.searchQuery === "Orders"){
    Orders = await DB.ReadDatabase("Orders")
  }

  return (
    <>
      <ContentPage searchQuery={searchParams.searchQuery} ProductsData={Products!} ordersData={Orders!}/>
    </>
  )
}

export default Content

export async function SendData(DataToWrite : string[], Columns : string[],  table : string){
  try{
    const DAB = new Database()
    const WTD = await DAB.WriteToDatabase(DataToWrite, Columns, table);
  }catch(err){
    console.log(`an error occured while writting to the database`)
  }
}