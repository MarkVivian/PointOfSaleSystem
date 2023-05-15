import Database from "@/Database/Database"
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
  const test = DB.ReadDatabase("Products")
  const Products = DB.rows
  //DB.ReadDatabase("Orders")
  const Orders = DB.rows
  return (
    <>
      <ContentPage searchQuery={searchParams.searchQuery} ProductsData={Products} ordersData={Orders}/>
    </>
  )
}

export default Content