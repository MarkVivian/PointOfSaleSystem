"use client"
import Image from "next/image"
import ProductsImage from "@/public/BackgroundImage.jpg"
import { useEffect, useState } from "react"
import DivForm from "./DivForm"

interface propInterface{
  pages : string,
  searchQuery : string
}



const ContentPage = (props:propInterface) => {
  const [info, SetInfo] = useState<{image : any, title: string, searchTerm : string}>({
    image : "",
    title : "",
    searchTerm : ""
  })

  useEffect(()=>{
    if(props.searchQuery === "Orders"){
      SetInfo((item)=>{
        return{
          ...item,
          image : ProductsImage,
          title : props.searchQuery
        }
      })
    }else if(props.searchQuery === "Products"){
      SetInfo((item)=>{
        return{
          ...item,
          image : ProductsImage,
          title : props.searchQuery
        }
      })
    }else{
      throw new Error("invalid url has been used.")
    }
  }, [])

  function SearchChange(event : React.ChangeEvent<HTMLInputElement>){
    const {name, value} = event.target
    console.log(value)
    SetInfo((item)=>{
      return{
        ...item,
        [name] : value
      }
    })
  }

  return (
    <div className=" h-[100vh] w-[100vw]">
        
        <Image src={info.image} alt="products images" className=" absolute h-[100vh] w-[100%] z-[-1]"/>

        <h1 className="text-center font-semibold py-2 text-xl bg-white opacity-70">{info.title}</h1>

        <div className=" h-[88vh] bg-red-500 mt-5 mx-5 p-5 relative">

        <div className=' flex place-content-center'>
                  Search
                  <input 
                    placeholder='search Item here'
                    value={info.searchTerm}
                    onChange={SearchChange}
                    name='searchTerm'
                    className=' ml-5 p-1'
                  />
            </div>

            <DivForm searchTerm={info.searchTerm} searchQuery={props.searchQuery}/>

        </div>

    </div>
  )
}

export default ContentPage;

/* 

*/