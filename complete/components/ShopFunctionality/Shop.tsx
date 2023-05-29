"use client"
import React from 'react'
import Image from "next/image"
import { useState } from "react"
import shop from "@/public/shop.jpg"
import { ProductsInterface } from '@/app/(Functionality)/Shop/page'
import FilterData from '../FunctionalityContent/FilterData'
import { resolve } from 'path'

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
      
    const [controlButton, setControlButton] = useState<{submit : boolean, done : boolean, clear : boolean, reload : boolean}>({
      submit : true,
      done : true,
      clear : false,
      reload : false
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
          await fetch("http://localhost:3000/DatabaseInfo/DeleteStaticTable",{
                    cache : "no-cache",
                    method : 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Set the appropriate Content-Type header
                        // Additional headers if needed
                        // ...
                        },
                    body:JSON.stringify({name : "Static"})
                })
          location.reload()
              })
    }

    async function SendToStatic(Count:number, Product:string){
      return new Promise(async (resolve, reject)=>{

      const body = {
        DataToWrite : [Count, Product.toLowerCase()],
        Columns : [`StaticCount`, `StaticItem`],
        tableName : "Static"
      }
      const resp = await fetch("http://localhost:3000/DatabaseInfo/AddData",{
                    method : 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Set the appropriate Content-Type header
                        // Additional headers if needed
                        },
                    body:JSON.stringify(body)
        })
      resolve(await resp.text())
      })
    }

    async function DoneStatic(){
      return new Promise((resolve, reject)=>{
          Data.map((value)=>{
            staticInfo.map(async (content)=>{
              if(value.ProductName === content.StaticItem){
                const count = value.ProductCount - content.StaticCount
                const dataToBeSend = {
                  tableName : "Products",
                  id : value.ProductId,
                  idColumn : "ProductId",
                  columns : ["ProductCount"],
                  UpdatedData : [count]
                }
                const res = await fetch("http://localhost:3000/DatabaseInfo/UpdateData",{
                    method : "POST",
                    cache : "no-cache",
                    body : JSON.stringify(dataToBeSend),
                    headers : {
                      'Content-Type': 'application/json',
                    }
                })
                const response = await res.text()
                resolve(response)
              }
            })
          })
      })
    }
      return (
        <section className=" h-[100vh] w-[100vw] relative">
          <Image src={shop} alt="Shop Background" className="absolute h-[100%] w-[100vw] filter blur-sm z-[-9999]"/>
            
            <h1 className=" bg-white w-[100vw] h-[3rem] text-center font-bold opacity-80 relative py-3 text-lg">
              SHOP
            </h1>

          <section className=' m-4 relative flex place-content-center'>

            <div className='ShopList flex overflow-y-scroll text-white border-x-2'>
              <div className='w-[40rem]'>

                <h1 className='text-center'>
                  Products Bought
                </h1>
                <hr />

                <div className=' p-1 w-full place-content-center relative grid'> 
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
                          <h2>Name:</h2> <h1>{item.ProductName}</h1>
                          </div> 
                          <div className='flex'>
                          <h2>Count : </h2> <h1>{item.ProductCount}</h1>
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
            </div>

            <div className='ShopEnter w-[30rem] relative'>
              <h1 className=' text-white text-center'>Enter Your Information</h1>
              <hr />

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

              <div className='w-[100%] relative flex place-content-center gap-10'>
{  controlButton.submit ? <button className=" bg-blue-500 relative" onClick={async ()=>{
                    try{
                      setControlButton((files)=>{
                          return{
                            ...files,
                            submit : false,
                            reload : true
                          }
                      })
                      await SendToStatic(input.Count, input.Product)
                    }catch(err){                      
                      console.log("an error occured while sending to static");
                    }
                    
                  }}>
                    Submit 
                  </button>
                  : 
                  ""
}

{  controlButton.done ? <button className=" bg-blue-500" onClick={async ()=>{
                    try{
                      setControlButton((files)=>{
                        return{
                          ...files,
                          done : false,
                          clear : true
                        }
                    })
                      await DoneStatic()
                    }catch(err){
                      console.log("an error occured while updating products" + err)
                    }
                  }}>
                    Done
                  </button>
                  : ""}
                
{controlButton.reload ?  <button className=" bg-blue-500" onClick={()=>{
                  setControlButton((files)=>{
                    return{
                      ...files,
                      reload : false,
                      submit : true
                    }
                })
                location.reload()
                }}>
                    Reload
                  </button>
                  :
                  ""}

{controlButton.clear ?  <button className=" bg-blue-500" onClick={async()=>{
                    setControlButton((files)=>{
                      return{
                        ...files,
                        clear : false,
                        done : true
                      }
                  })
              const response = await ClearStatic()
  }}>
                    Clear
                  </button>
                  :
                  ""}
          </div>
                <div>
                  Submit -&gt; this will allow you to see the Product Bought .<br />
                  Done -&gt; will update the Data in the database. <br />
                  Reload -&gt; will show you the item when you submit it. <br />
                  Clear -&gt; will clear all the data from the product Bought section.
                </div>

      </div>
          </section>
    
        </section>
      )
}

export default Shop