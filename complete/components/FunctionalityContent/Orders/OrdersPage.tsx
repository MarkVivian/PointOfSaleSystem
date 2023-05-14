"use client"
import Image from "next/image"
import ProductsImage from "@/public/BackgroundImage.jpg"
import React, { useEffect, useRef, useState } from 'react'
import OrdersForm from './OrdersForm'
import PopUp from "@/components/FunctionalityContent/PopUp"

const OrdersPage:React.FC = () => {
  const hideInput = useRef<HTMLInputElement>(null)
  const blurBackground = useRef<HTMLInputElement>(null)
  const [info, SetInfo] = useState<{searchTerm : string, PopUpState : boolean}>({
    searchTerm : "",
    PopUpState : false
  })

  useEffect(()=>{
      localStorage.clear()
      localStorage.setItem("PopUpState", `${info.PopUpState}`)
  }, [info.PopUpState])

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

  function Hide(){
    if(hideInput.current){
      const classLists = hideInput.current?.classList
      console.log(classLists)
      classLists.toggle("hideMyself")
    }
  }

  function PopUpControl(){
      SetInfo((items)=>{
        return{
          ...items,
          PopUpState : !items.PopUpState
        }
      })

      if(blurBackground.current){
        const classl = blurBackground.current.classList
        if(info.PopUpState){
          classl.toggle("blurBackground")
        }
      }
  }

  return (
    <div className=" h-[100vh] w-[100vw] ordersPage relative">
        
        <Image src={ProductsImage} alt="products images" className=" absolute h-[100vh] w-[100%] z-[-1]"/>

        {
          info.PopUpState ? 
            <PopUp /> : ""
        }

        <h1 className="text-center font-semibold py-2 text-xl bg-white opacity-70">Orders</h1>


        <div className=" h-[88vh] bg-red-500 mt-5 mx-5 p-5 relative">

            <div className=' flex place-content-center'>

                      <button className=" border-2 p-2 rounded-lg" onClick={Hide}>
                        Search
                      </button>
                      <input 
                        placeholder='search Item here'
                        value={info.searchTerm}
                        onChange={SearchChange}
                        name='searchTerm'
                        className=' ml-5 p-1'
                        ref={hideInput}
                      />

                      <button className=" border-2 p-2 rounded-lg ml-2" onClick={PopUpControl}>
                        Add Product
                      </button>
            </div>

            <OrdersForm searchTerm={info.searchTerm} key={info.searchTerm}/>
          </div>

    </div>
  )
}

export default OrdersPage