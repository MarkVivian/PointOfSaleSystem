"use client"
import Image from "next/image"
import ProductsImage from "@/public/BackgroundImage.jpg"
import ContentPage from "@/components/Content/Content"
import { useEffect, useState } from "react"

interface propInterface{
  params : {
      pages : string
  },
  searchParams : {
      searchQuery : string
  }
}



const Content = (props:propInterface) => {
  const [info, SetInfo] = useState<{image : any, title: string}>({
    image : "",
    title : ""
  })
  useEffect(()=>{
    if(props.searchParams.searchQuery === "Orders"){
      SetInfo((item)=>{
        return{
          ...item,
          image : ProductsImage,
          title : props.searchParams.searchQuery
        }
      })
    }else if(props.searchParams.searchQuery === "Products"){
      SetInfo((item)=>{
        return{
          ...item,
          image : ProductsImage,
          title : props.searchParams.searchQuery
        }
      })
    }
  }, [])

  return (
    <div className=" h-[100vh] w-[100vw]">
        <Image src={info.image} alt="products images" className=" absolute h-[100vh] w-[100%] z-[-1]"/>
        <h1 className="text-center font-semibold py-2 text-xl bg-white opacity-70">{info.title}</h1>
        <div className=" h-[88vh] bg-red-500 mt-5 mx-5 p-5 relative">
          <ContentPage type={info.title}/>
        </div>
    </div>
  )
}

export default Content