import ApiRequests from "@/components/APIRequests"
import ContentPage from "./ContentPage"
import { Orders, Products, propInterface } from "@/components/interfaces";

const Content = async ({params}:propInterface) => {
  var Products:Products[] | any;
  var Orders:Orders[] | any;
  if(params.content === "Products"){
      Products = await ApiRequests.RecieveFromServer("Products")
  }else if(params.content === "Orders"){
    Orders = await ApiRequests.RecieveFromServer("Orders")
  }
  return (
    <>
      <ContentPage searchQuery={params.content!} ProductsData={Products!} ordersData={Orders!}/>
    </>
  )
}

export default Content