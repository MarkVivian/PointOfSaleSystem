import ApiRequests from "@/components/APIRequests"
import Shop from "./Shop"
import { Products, Static } from "@/components/interfaces"

const Shoping = async () => {
  const Products:Products|any = await ApiRequests.RecieveFromServer("Products")
  const Static:Static|any = await ApiRequests.RecieveFromServer("Static")
  return (
    <>
      <Shop Products={Products} staticInfo={Static}/>
    </>
  )
}

export default Shoping
