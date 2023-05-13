import Image from "next/image"
import Products from "@/public/backgroundImage.jpg"
import ContentPage from "@/components/Content/Content"

interface propInterface{
  params : {
      pages : string
  },
  searchParams : {
      searchQuery : string
  }
}


const Content = (props:propInterface) => {
  
  return (
    <div className=" h-[100vh] w-[100vw] bg-slate-600">
        <Image src={Products} alt="products images" width={100} height={100} className=" absolute h-[100%] w-[100%]"/>
        <div>
          <ContentPage />
        </div>
    </div>
  )
}

export default Content