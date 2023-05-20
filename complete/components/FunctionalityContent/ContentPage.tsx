"use client"
import OrdersForm from './Orders/OrdersForm'
import ProductsForm from './Products/ProductsForm'
import Image from "next/image"
import ProductsImage from "@/public/BackgroundImage.jpg"
import React, { useRef, useState } from 'react'
import PopUp from "@/components/FunctionalityContent/PopUp"


const ContentPage:React.FC<{searchQuery : string, ProductsData:any, ordersData:any}> = ({searchQuery, ProductsData, ordersData}) => {
    const hideInput = useRef<HTMLInputElement>(null)

    const [info, SetInfo] = useState<{searchTerm : string, state : boolean}>({
      searchTerm : "",
      state : false
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
    <>
        <div className=" h-[100vh] w-[100vw] ContentPage relative">
        
            <Image src={ProductsImage} alt="products images" className=" absolute h-[100vh] w-[100%] z-[-1]"/>

            <h1 className="text-center font-semibold py-2 text-xl bg-white opacity-70">{searchQuery}</h1>


            <div className=" h-[88vh] bg-red-500 mt-5 mx-5 p-5 relative">

                    <div className=' flex place-content-center gap-3'>
        
                            <button className="buttonReusable" onClick={()=>{
                                if(hideInput.current){
                                  const classLists = hideInput.current?.classList
                                  console.log(classLists)
                                  classLists.toggle("hidden")
                                }
                            }}>
                                Search
                            </button>
                            <input 
                                placeholder='search Item here'
                                value={info.searchTerm}
                                onChange={SearchChange}
                                name='searchTerm'
                                className=' ml-5 p-1 hidden'
                                ref={hideInput}
                            />
        
                            <PopUp searchQuery={searchQuery}/>

                            <button onClick={()=>{
                                SetInfo((items)=>{
                                    return{
                                      ...items,
                                      state : !info.state
                                    }
                                })
                            }} className=' buttonReusable'>
                              Delete Item
                            </button>

                            {
                              info.state ?
                              <button onClick={()=>{location.reload()}} className='buttonReusable'>
                                  Done
                              </button>:
                              ""
                            }
                    </div>

                {
                    searchQuery === "Orders" ?
                        <OrdersForm searchTerm={info.searchTerm} Orders={ordersData}/>
                            :
                        <ProductsForm searchTerm={info.searchTerm} Products={ProductsData} state={info.state}/>
                }
            </div>

        </div>

    </>
  )
}

export default ContentPage