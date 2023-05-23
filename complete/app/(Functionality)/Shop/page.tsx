"use client"
import { NextPage } from "next"
import Image from "next/image"
import shop from "@/public/shop.jpg"
import { useState } from "react"

const Shop:NextPage = () => {
  const[input, setInput] = useState<{Product : string, Count : number}>({
    Product : "",
    Count : 0
  })

  function ChangeEvent(event:any){
    const {name, value} = event.target
    setInput((item)=>{
      return{
        ...item,
        [name] : value
      }
    })
  }

  return (
    <section className=" h-[100vh] w-[100vw] relative">
      <Image src={shop} alt="Shop Background" className="absolute h-[100%] w-[100vw] filter blur-sm z-[-9999]"/>
        
        <h1 className=" bg-white w-[100vw] h-[3rem] text-center font-bold opacity-80 relative py-3 text-lg">
          SHOP
        </h1>

        <div className=" bg-gradient3 h-[87vh] w-[97vw] relative grid m-auto mt-4 rounded-lg p-4">

            <div className=" overflow-y-scroll h-[26rem]">
                <div>
                  <div className="grid">
                    <button>
                      Delete
                    </button>
                    <button>
                      Update
                    </button>
                  </div>
                </div>
            </div>

            <div className="ShopEnter bg-white flex gap-4">
                  <div>
                    <h1>
                      Product
                    </h1>

                    <input 
                        type="text"
                        placeholder="ProductName"
                        name="Product"
                        className=""
                        value={input.Product}
                        onChange={ChangeEvent}
                    />

                  </div>

                  <div>
                    <h1>
                     Number of Items
                    </h1>

                    <input 
                      type="number"
                      placeholder="Product Count"
                      className=""
                      name="Count"
                      value={input.Count}
                      onChange={ChangeEvent}
                    />

                  </div>

                  <div>
                    <h1>
                      Cost
                    </h1>
                  </div>

                  <button className=" bg-blue-500">
                    submit
                  </button>
            </div>

        </div>

    </section>
  )
}

export default Shop