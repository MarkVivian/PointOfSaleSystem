import Database from "@/Database/Database"
import ProductsPage from "@/components/FunctionalityContent/Products/ProductsPage"
import OrdersPage from "@/components/FunctionalityContent/Orders/OrdersPage"

interface propInterface{
  params : {
      pages : string
  },
  searchParams : {
      searchQuery : string
  }
}

const Content = ({params, searchParams}:propInterface) => {

  return (
    <>
      {
        searchParams.searchQuery === "Products" 
           ?
          <ProductsPage />
           : 
          <OrdersPage />
      }
    </>
  )
}

export default Content
