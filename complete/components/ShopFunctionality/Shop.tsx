"use client"
import React from 'react'
import Image from "next/image"
import { useState } from "react"
import shop from "@/public/shop.jpg"
import { ProductsInterface } from '@/app/(Functionality)/Shop/page'
import FilterData from '../FunctionalityContent/FilterData'

interface StaticInterface{
  id : number,
  StaticItem : string,
  StaticCount : number,
  StaticPrice : number
}

function Shop({Products, staticInfo} : {Products : ProductsInterface[], staticInfo : StaticInterface[]}) {
    const[input, setInput] = useState<{Product : string, Count : number, Done : boolean, submit : boolean, cost:number, currentCost : number,getCurrentCost : boolean}>({
        Product : "",
        Count : 0,
        Done : false,
        submit : false,
        cost : 0,
        currentCost : 0,
        getCurrentCost : false
      })
  
    const Data = FilterData<ProductsInterface>(Products, input.Product.toLocaleLowerCase(), (Products)=>Products.ProductName.toLocaleLowerCase())

    function ChangeEvent(event:any){
      const {name, value} = event.target
      setInput((item)=>{
        return{
          ...item,
          [name] : value,
          getCurrentCost : true
        }
      })
    }


    async function ClearStatic(){
      return new Promise(async (resolve, reject)=>{
        try{
          const Response = await fetch("http://localhost:3000/DatabaseInfo/DeleteStaticTable",{
                    cache : "no-cache",
                    method : 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Set the appropriate Content-Type header
                        // Additional headers if needed
                        // ...
                        },
                    body:JSON.stringify({name : "Static"})
                })
          const res = await Response.text()
          resolve(res)
        }catch(err){
          reject(err)
          console.log(`an error occured while clearing the static.`)
        }
      })
    }

    async function SendToStatic(){
      return new Promise(async (resolve, reject)=>{
        try{
          const Response = await fetch("http://localhost:3000/DatabaseInfo/AddData",{
                    cache : "no-cache",
                    method : 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Set the appropriate Content-Type header
                        // Additional headers if needed
                        // ...
                        },
                    body:JSON.stringify({
                      DataToWrite : [input.Count, input.Product],
                      Columns : [`StaticCount`, `StaticItem`],
                      tableName : "Static"
                    })
                })
          const res = await Response.json()
          resolve(res)
        }catch(err){
          reject(err)
          console.log(`an error occured while sending the static data.`)
        }
      })
    }

      return (
        <section className=" h-[100vh] w-[100vw] relative">
          <Image src={shop} alt="Shop Background" className="absolute h-[100%] w-[100vw] filter blur-sm z-[-9999]"/>
            
            <h1 className=" bg-white w-[100vw] h-[3rem] text-center font-bold opacity-80 relative py-3 text-lg">
              SHOP
            </h1>

          <section className=' m-4 relative flex place-content-center'>

            <div className='ShopList flex overflow-y-scroll text-white '>
              <div className='w-[40rem]'>

                <h1 className='text-center'>
                  Products Bought
                </h1>
                <hr />

                <div className=' p-1'> 
                  {
                staticInfo.map((item)=>{
                  return(
                    <div  key={item.id}>
                         <div className='flex gap-6 m-3 w-fit p-1'>
                            <span className='flex'>
                                <h2>Product Name:</h2> <h1>{item.StaticItem}</h1>
                            </span>
                            <span className='flex'>
                                <h2>Product Count : </h2> <h1>{item.StaticCount}</h1>
                            </span>
                            <span className='flex'>
                                <h2>Cost per Product : </h2> <h1>{item.StaticPrice}.ksh</h1>
                            </span>
                        </div>
                    </div>
                        )
                      })
                  }
               </div>

                {
                  input.Product === "" ?
                  ""
                  : 
                  Data.map((item)=>{
                    return(
                      <div key={item.ProductId}>
                        <h1 className='text-center text-yellow-400'>Product in Inventory</h1>
                        <div className='flex gap-6 m-1 w-fit ml-4'>
                          <div className='flex'>
                          <h2>Product Name:</h2> <h1>{item.ProductName}</h1>
                          </div> 
                          <div className='flex'>
                          <h2>Product Count : </h2> <h1>{item.ProductCount}</h1>
                          </div>
                          <div className='flex'>
                          <h2>Cost per Product : </h2> <h1>{item.ProductCost}.ksh</h1>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
             

              <div className=' w-[10rem] border-l-2'>
                    <h1 className='text-center'>Cost</h1>
                    <hr/>
                    {
                      staticInfo.map((item)=>{
                        return(
                          <div key={item.id}>
                            <h1 className=' text-center m-3 p-1'>
                              {item.StaticPrice}.ksh
                            </h1>
                          </div>
                        )
                      })
                    }
              </div>
            </div>
            

            <div className='ShopEnter w-[30rem] relative'>

                <div className='flex'>
                  <h1>
                    Product Name :
                  </h1>

                  <input 
                      type="text"
                      placeholder="ProductName"
                      name="Product"
                      value={input.Product}
                      onChange={ChangeEvent}
                      className=' rounded-xl p-1 text-center'
                  />  

                </div>

                <div className='flex'>
                  <h1>
                  Product Count : 
                  </h1>

                  <input 
                    type="number"
                    placeholder="Product Count"
                    name="Count"
                    value={input.Count}
                    onChange={ChangeEvent}
                    className=' w-[4.5rem] rounded-xl p-1 text-center'
                  />

                </div>

                <div className=' gap-6 relative flex m-1 p-1 place-content-center w-[100%]'>

                  <button className=" bg-blue-500" onClick={async()=>{
                    const reponse = await SendToStatic()
                    location.reload()
                  }}>
                    submit
                  </button>

                  <button className=" bg-blue-500" onClick={async ()=>{
                    const response = await ClearStatic()
                    location.reload()
                  }}>
                    Done/Clear
                  </button>
                </div>
                

            </div>

          </section>
    
        </section>
      )
}

export default Shop