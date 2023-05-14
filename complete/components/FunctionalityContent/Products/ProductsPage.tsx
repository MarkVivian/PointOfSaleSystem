"use client"
import Image from "next/image"
import ProductsImage from "@/public/BackgroundImage.jpg"
import { useState } from "react"
import ProductsForm from "./ProductsForm"


const ContentPage = () => {
  const [info, SetInfo] = useState<{searchTerm : string}>({
    searchTerm : ""
  })

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
    <div className=" h-[100vh] w-[100vw] productsPage">
        
        <Image src={ProductsImage} alt="products images" className=" absolute h-[100vh] w-[100%] z-[-1]"/>

        <h1 className="text-center font-semibold py-2 text-xl bg-white opacity-70">Products</h1>

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

            <ProductsForm searchTerm={info.searchTerm} key={info.searchTerm}/>

        </div>

    </div>
  )
}

export default ContentPage;

/* 

*/