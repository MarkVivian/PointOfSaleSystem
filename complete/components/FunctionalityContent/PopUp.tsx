"use client"
import React, { useEffect, useRef, useState } from 'react'

interface ProductsInterface{
        ProductName : string,
        ProductCount : string,
        ProductCost : string
}
interface OrdersInterface {
    OrderedItem : string,
    OrderDate : string,
    ArrivalDate : string,
    OrderCount : string 
}

const PopUp:React.FC<{searchQuery : string}> = ({searchQuery}) => {
    const [target, useTarget] = useState<{name : string, value : number | string, type : string}[] | {name : string, value : number | string, type : string}[]>()

    const HidePopUp = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(searchQuery === "Products"){
            useTarget(()=>ProductContainer)
        }else if(searchQuery === "Orders"){
            useTarget(()=>OrderContainer)
        }
    }, [])

    const [ProductSetup, setProductSetup] = useState<ProductsInterface>({
        ProductName : "",
        ProductCount : "",
        ProductCost : ""
    })

    const [OrderSetup, setOrderSetup] = useState<OrdersInterface>({
        OrderedItem : "",
        OrderDate : "",
        ArrivalDate : "",
        OrderCount : ""
    })



    const ProductContainer:{name : string, value : number | string, type : string}[] = [
        {
            name : "ProductName",
            value : ProductSetup.ProductName,
            type : "text"
        },
        {
            name : "ProductCount",
            value : ProductSetup.ProductCount,
            type : "number" 
        },
        {
            name : "Product Cost",
            value : ProductSetup.ProductCost,
            type : 'number'
        }
    ]

    const OrderContainer:{name : string, value : number | string, type : string}[] = [
        {
            name : "Ordered Item",
            value : OrderSetup.OrderedItem,
            type : "string"
        },
        {
            name : "Ordered Date",
            value : OrderSetup.OrderDate,
            type : "string"
        },
        {
            name : "Arrival date",
            value : OrderSetup.ArrivalDate,
            type : "string"
        },
        {
            name : "number of items",
            value : OrderSetup.OrderCount,
            type : "number"
        }
    ]

    function ValueChanged(event : any){
        const {name, value, type} = event.target
        setProductSetup((item)=>{
            return{
                ...item,
                [name] : value
            }   
        })

        setOrderSetup((item)=>{
            return{
                ...item,
                [name] : value
            }
        })
    }

    function AddItem(){
        
    }


  return (
    <>
        <button className=" border-2 p-2 rounded-lg ml-2" onClick={()=>{
            if(HidePopUp.current){
                const classList = HidePopUp.current.classList
                classList.remove("hidden")
                classList.add("grid")
            }
        }}>
            Add {searchQuery}
        </button>

        <div className=' absolute z-[999] hidden bg-black h-[100%] w-[100vw] opacity-80 place-content-center' ref={HidePopUp}>


            <div className=' bg-white opacity-1 w-[20rem] h-[20rem]'>
                    <span>
                        ENTER APPROPRIATE INFORMATION HERE
                    </span>
                {
                    target ?
                        target.map((item)=>{
                            return(
                                <div key={item.name} className=' my-2'>
                                    <span>
                                        {item.name}
                                     </span>
                            
                                    <input 
                                        type={`${item.type}`}
                                        placeholder={`${item.name}`}
                                        name={`${item.name}`}
                                        value={item.value}
                                        onChange={ValueChanged}
                                        className=' ml-2 rounded-md'
                                    />
                                </div>
                            )
                        })
                        :
                        ""
                }       

                <div>
                    <button className='buttonReusable' onClick={AddItem}>
                        Add {searchQuery}
                    </button>

                    <button className='buttonReusable' onClick={()=>{
                        if(HidePopUp.current){
                            const classList = HidePopUp.current.classList
                            classList.add("hidden")
                            classList.remove("grid")
                        }
                    }}>
                        close
                    </button>

                </div>

            </div>
                
        </div>
    </>
  )
}

export default PopUp