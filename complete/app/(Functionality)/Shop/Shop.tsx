"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import shop from "@/public/shop.jpg"
import FilterData from '@/components/FilterData'
import { Products, Static } from "@/components/interfaces"
import ApiRequests from "@/components/APIRequests"
import CheckIfSimilar from "@/components/CheckIfSimilar"
import CheckIfEmpty from "@/components/CheckIfEmpty"
import DueDate from "@/components/DueDate"


function Shop({Products, staticInfo} : {Products : Products[], staticInfo : Static[]}) {
    const[input, setInput] = useState<{Product : string, Count : number, Done : boolean, submit : boolean, cost:number, id : number}>({
        Product : "",
        Count : 1,
        Done : false,
        submit : false,
        cost : 0,
        id : 0
      })
    
    const [controlButton, setControlButton] = useState<{submit : boolean, done : boolean, message : string,itemName : string, WrongItem : boolean, reloadRequired : boolean, PleaseClear : boolean}>({
      submit : true,
      done : true,
      message : "",
      WrongItem : true,
      itemName : "",
      reloadRequired : false,
      PleaseClear : false
    })

    const Data = FilterData<Products>(Products, input.Product.toLocaleLowerCase(), (Products)=>Products.ProductName.toLocaleLowerCase())

    function ChangeEvent(event:any){
      const {name, value} = event.target
      setInput((item)=>{
        return{
          ...item,
          [name] : value,
          getCurrentCost : true
        }
      })
      setControlButton((vlues)=>{
        return{
          ...vlues,
          message : ""
        }
      })
    }

    useEffect(()=>{
      if(Data.length === 1){
        Data.map((item)=>{
          if(CheckIfSimilar(input.Product, item.ProductName) === item.ProductName || input.Product === item.ProductName){
            console.log("are you rude. Fuck Off")
            console.log(`the checkifSimilar value is ${CheckIfSimilar(input.Product, item.ProductName)}, the item is ${item.ProductName} and input is ${input.Product}`)
            setControlButton((value)=>{
              return{
                ...value,
                itemName : CheckIfSimilar(input.Product, item.ProductName),
              }
            })
            setInput((content)=>{
              return{
                ...content,
                id : item.ProductId,
                cost : item.ProductCost
              }
            })
          }
        })
      }
      console.log(input)
    }, [input.Product])

    async function DoneStatic(){
        Data.map((value)=>{
          staticInfo.map(async (content)=>{
            if(value.ProductName.toLowerCase() === content.StaticItem.toLowerCase()){
              const count = value.ProductCount - content.StaticCount   
              await ApiRequests.UpdateInServer(
                "Products",
                ["ProductCount"],
                value.ProductId,
                "ProductId",
                [count]
              )
            }
          })
        } )
    }

    async function SubmitFunc(){
      if(controlButton.itemName !== input.Product){
        setControlButton((values)=>{
          return{
            ...values,
            message : `Did you mean ${controlButton.itemName}`
          }
        })
      }else{
        setControlButton((value)=>{
          return{
            ...value,
            submit : false,
            done : false,
            message : "please reload to see item."
          }
        })
        const cost = input.cost * input.Count
        await ApiRequests.WriteToServer("Static", [`StaticCount`, `StaticItem`, `StaticPrice`], [input.Count, input.Product.toLowerCase(), cost])
    }}

    function CalculateCost():number{
      var total = 0
      for(var i =0; i < staticInfo.length; i++){
        total += staticInfo[i].StaticPrice
      }
      return total;
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
                        <DueDate Product={item.ProductName} type="Products" Count={item.ProductCount} ArrivalDate="NA" />
                      </div>
                    )
                  })
                }
                
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
                              <span className="flex">
                                    <h2>Total cost: </h2> <h1>{item.StaticPrice}</h1>
                              </span>
                          </div>
                          <hr />
                      </div>
                          )
                        })
                    }
               </div>
               
              </div>
            </div>

            <div className='ShopEnter w-[30rem] relative'>
              <h1 className=' text-white text-center'>Enter Your Information</h1>
              <hr />
                <div>
                  <h1 className=" font-bold text-center">
                    {controlButton.message}
                  </h1>
                </div>
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

              {  controlButton.submit ? 
                  <button className=" bg-blue-500 relative" onClick={async ()=>{
                      try{
                        if(CheckIfEmpty([input.Product])){
                          setControlButton((value)=>{
                            return{
                              ...value,
                              message : "please fill in all the fields"
                              }
                          })
                          }else{
                            SubmitFunc()
                        }
                        
                      }catch(err){                      
                        console.log("an error occured while sending to static");
                      }

                    }}>
                    Submit 
                  </button>
                  : 
                  <button className=" bg-blue-500" onClick={()=>{
                      setControlButton((values)=>{
                        return{
                          ...values,
                          submit : true,
                          done : true,
                        }
                    })
                    location.reload()
                    }}>
                      Reload
                  </button>
}

                {  controlButton.done ? <button className=" bg-blue-500" onClick={async ()=>{
                    try{
                      setControlButton((values)=>{
                        return{
                          ...values,
                          submit : true,
                          done : false,
                          message : "press clear button to clear the slots"
                        }
                    })
                      await DoneStatic()
                    }catch(err){
                      console.log("an error occured while updating products" + err)
                    }
                  }}>
                    Done
                  </button>
                  : 
                  <button className=" bg-blue-500" onClick={async()=>{
                    try{
                      setControlButton((values)=>{
                        return{
                          ...values,
                          done : true,
                          submit : true,
                        }
                      })
                      await ApiRequests.ClearFromServer("Static")
                      location.reload()
                    }catch(err){
                      console.error("an error occured in client while sending a request to clear database")
                    }
                  }}>
                    Clear
                  </button>
}

                
          </div>

          <div className="flex place-content-center absolute mt-10 ">
            <h2 className=" grid text-lg align-middle my-2">Total Cost: </h2>
            <input 
            type="text"
            name="CalculateCost"
            className=" h-10 w-20 text-center rounded-xl"
              value={CalculateCost()} 
            />
          </div>

      </div>
          </section>
    
        </section>
      )
}

export default Shop