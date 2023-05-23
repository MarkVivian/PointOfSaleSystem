"use client"
import OrdersForm from './Orders/OrdersForm'
import ProductsForm from './Products/ProductsForm'
import Image from "next/image"
import ProductsImage from "@/public/BackgroundImage.jpg"
import React, { useRef, useState } from 'react'
import PopUp from "@/components/FunctionalityContent/PopUp"
import Link from 'next/link'


const ContentPage:React.FC<{searchQuery : string, ProductsData:any, ordersData:any}> = ({searchQuery, ProductsData, ordersData}) => {
    const hideInput = useRef<HTMLInputElement>(null)

    const [info, SetInfo] = useState<{searchTerm : string, stateDelete : boolean, stateUpdate : boolean}>({
      searchTerm : "",
      stateDelete : false,
      stateUpdate : false
    })

    const [fetchedData, setFetchedData] = useState<{ProductData : any, OrdersData : any}>({
        ProductData : "",
        OrdersData : ""
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
        
            <Image src={ProductsImage} alt="products images" className=" absolute h-[100vh] w-[100%] z-[-1] blur-sm"/>

            <h1 className="text-center font-semibold py-2 text-xl bg-white opacity-70">{searchQuery}</h1>


            <div className=" h-[88vh] bg-black mt-5 mx-5 p-5 relative opacity-90">

                    <div className=' flex place-content-center gap-3'>

                          <Link href={"/"} className=''>
                            <button className="border-2 text-white p-3">
                              Home
                            </button>
                          </Link>
        
                            <button className="border-2 text-white p-3" onClick={()=>{
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
                                className=' ml-1 p-1 hidden'
                                ref={hideInput}
                            />
        
                            <PopUp searchQuery={searchQuery}/>

                            <button className=' border-2 text-white p-3' onClick={()=>{
                              SetInfo((item)=>{
                                return{
                                  ...item,
                                  stateUpdate : !info.stateUpdate
                                }
                              })
                            }}>
                                Update Data
                            </button>
                             
                            <button onClick={()=>{
                                SetInfo((items)=>{
                                    return{
                                      ...items,
                                      stateDelete : !info.stateDelete
                                    }
                                })
                            }} className=' border-2 text-white p-3 '>
                              Delete Item
                            </button>

                    </div>

                {
                    searchQuery === "Orders" ?
                        <OrdersForm searchTerm={info.searchTerm} Orders={ordersData} stateDelete={info.stateDelete} stateUpdate={info.stateUpdate}/>
                            :
                        <ProductsForm searchTerm={info.searchTerm} Products={ProductsData} stateDelete={info.stateDelete} stateUpdate={info.stateUpdate}/>
                }
            </div>

        </div>

    </>
  )
}

export default ContentPage