"use client"
import React, { useEffect, useRef, useState } from 'react'
import CheckIfEmpty from "@/components/CheckIfEmpty"
import { ProductsInterface, OrdersInterface } from '@/components/interfaces'
import ApiRequests from '@/components/APIRequests'


const PopUp:React.FC<{searchQuery : string}> = ({searchQuery}) => {

    const HidePopUp = useRef<HTMLDivElement>(null)
    const MessageRef = useRef<HTMLDivElement>(null)

    const [Message, setMessage] = useState({
        message : "",
        work : false,
        fail : false,
        infoGood : false,
        infoBad : false
    })

    useEffect(()=>{
        if(Message.fail){
            setMessage((content)=>{
                return{
                    ...content,
                    message : "Could not write the data. Contact the Programmer"
                }
            })
        }else if(Message.work){
            setMessage((content)=>{
                return{
                    ...content,
                    message : "Data has been written succesfully."
                }
            })
        }else if(Message.infoGood){
            setMessage((value)=>{
                return{
                    ...value,
                    message : ""
                }
            })
        }else if(Message.infoBad){
            setMessage((content)=>{
                return{
                    ...content,
                    message : "Please fill all the fields"
                }
            })
        }
    }, [Message.infoBad, Message.infoGood, Message.fail, Message.work])

    const [ProductSetup, setProductSetup] = useState<ProductsInterface>({
        ProductName : "",
        ProductCount : 0,
        ProductCost : 0
    })

    const [OrderSetup, setOrderSetup] = useState<OrdersInterface>({
        OrderedItem : "",
        OrderDate : "",
        ArrivalDate : "",
        OrderCount : 0
    })

    const ProductContainer:{name : string, value : number | string, type : string, placeholder : string}[] = [
        {
            name : "ProductName",
            placeholder : "e.g hammer",
            value : ProductSetup.ProductName,
            type : "text"
        },
        {
            name : "ProductCount",
            placeholder : "e.g 23, 56",
            value : ProductSetup.ProductCount,
            type : "number" 
        },
        {
            name : "ProductCost",
            placeholder : "e.g 5000",
            value : ProductSetup.ProductCost,
            type : 'number'
        }
    ]

    const OrderContainer:{name : string, value : number | string, type : string, placeholder : string}[] = [
        {
            name : "OrderedItem",
            value : OrderSetup.OrderedItem,
            type : "string",
             placeholder : "e.g Hammer"
        },
        {
            name : "OrderDate",
            value : OrderSetup.OrderDate,
            type : "string",
             placeholder : "e.g. yyyy-mm-dd -> 2001-12-01"
        },
        {
            name : "ArrivalDate",
            value : OrderSetup.ArrivalDate,
            type : "string",
             placeholder : "e.g. yyyy-mm-dd -> 2001-12-01"
        },
        {
            name : "OrderCount",
            value : OrderSetup.OrderCount,
            type : "number",
             placeholder : "e.g 24"
        }
    ]

    function ValueChanged(event : any){
        setMessage((content)=>{
            return{
                ...content,
                work : false,
                fail : false,
                infoGood : true,
                infoBad : false
            }
        })
        const {name, value} = event.target
        if(searchQuery === "Orders"){
            setOrderSetup((item)=>{
                return{
                    ...item,
                    [name] : value
                }
            })
        }else if(searchQuery === "Products"){
            setProductSetup((item)=>{
                return{
                    ...item,
                    [name] : value
                }   
            })
        }else{
            throw new Error("invalid url has been used")
        }

    }

    async function AddItem(){
        const {OrderedItem, OrderDate, OrderCount, ArrivalDate} = OrderSetup
        const {ProductName, ProductCost, ProductCount} = ProductSetup
        try{
            setMessage((value)=>{
                return{
                    ...value,
                    work : true,
                    fail : false,
                    info: false
                }
            })
            if(searchQuery === "Orders"){
                await ApiRequests.WriteToServer(
                    "Orders",
                    ["OrderCount", "OrderDate", "OrderedItem", "ArrivalDate"],
                    [OrderCount, OrderDate, OrderedItem.toLowerCase(), ArrivalDate]
                )
                location.reload()
            }else if(searchQuery === "Products"){
                await ApiRequests.WriteToServer(
                    "Products",
                    ["ProductName", "ProductCost", "ProductCount"],
                    [ProductName.toLowerCase(), ProductCost, ProductCount]
                )
                location.reload()
            }else{
                throw new Error("invalid url is being used")
            }
        }catch(err){
            setMessage((value)=>{
                return{
                    ...value,
                    work : false,
                    fail : true,
                    info : false
                }
            })
        }
    }

  return (
    <>
        <button className='border-2 text-white p-3' onClick={()=>{
            if(HidePopUp.current){
                const classList = HidePopUp.current.classList
                classList.remove("hidden")
                classList.add("grid")
                localStorage.clear()
                localStorage.setItem("PopUpClass", "Grid")
            }
        }}>
            Add {searchQuery}
        </button>

        <div className='PopUp absolute z-[999] hidden h-[100%] w-[100vw] opacity-[96] place-content-center text-xl' ref={HidePopUp}>


            <div className=' bg-white opacity-1 w-[30rem] p-2 rounded-md PopUpBox gap-3 relative'>
                    <h1 className=' text-center'>
                        ENTER APPROPRIATE INFORMATION
                    </h1>
                    <hr/>
{                  Message.work ?  
                    <h1 className=' w-[100%] text-center font-extrabold text-black' ref={MessageRef}>
                        {Message.message}
                    </h1>
                    :
                    <h1 className=' w-[100%] text-center font-extrabold text-red-800' ref={MessageRef}>
                    {Message.message}
                    </h1>
}
                {
                    searchQuery === "Orders" ?
                        OrderContainer.map((item)=>{
                            return(
                                <div key={item.name} className=' grid my-2 gap-3'>
                                    <span>
                                        {item.name}
                                     </span>
                            
                                    <input 
                                        type={`${item.type}`}
                                        placeholder={`${item.placeholder}`}
                                        name={`${item.name}`}
                                        value={item.value}
                                        onChange={ValueChanged}
                                        className=' ml-2 rounded-md PopUpInput'
                                    />
                                </div>
                            )
                        })
                        :
                        ProductContainer.map((item)=>{
                            return(
                                <div key={item.name} className=' grid my-2 gap-3'>
                                    <span>
                                        {item.name}
                                     </span>
            
                                    <input 
                                        type={`${item.type}`}
                                        placeholder={`${item.name}`}
                                        name={`${item.name}`}
                                        value={item.value}
                                        onChange={ValueChanged}
                                        className=' ml-2 rounded-md PopUpInput'
                                    />
                                </div>
                            )
                        })
                }       

                <div className=' relative gap-3 flex place-content-center'>
                    <button className='PopUpButton' onClick={async ()=>{
                        if(searchQuery==="Products"){
                            if(CheckIfEmpty([ProductSetup.ProductName])){
                                setMessage((value)=>{
                                    return{
                                        ...value,
                                        work : false,
                                        fail : false,
                                        infoBad : true,
                                        infoGood : false
                                    }})
                            }else{
                                setMessage((value)=>{
                                    return{
                                        ...value,
                                        work : false,
                                        fail : false,
                                        infoBad : false,
                                        infoGood : true
                                    }})
                                await AddItem()
                            }
                        }else if(searchQuery === "Orders"){
                            if(CheckIfEmpty([OrderSetup.ArrivalDate, OrderSetup.OrderDate, OrderSetup.OrderedItem])){
                                setMessage((value)=>{
                                    return{
                                        ...value,
                                        work : false,
                                        fail : false,
                                        infoBad : true,
                                        infoGood : false
                                    }})
                            }else{
                                setMessage((value)=>{
                                    return{
                                        ...value,
                                        work : false,
                                        fail : false,
                                        infoBad : false,
                                        infoGood : true
                                    }})
                                await AddItem()
                            }
                        }
                        }}>
                        Add {searchQuery}
                    </button>

                    <button className='PopUpButton' onClick={()=>{
                        if(HidePopUp.current){
                            const classList = HidePopUp.current.classList
                            classList.add("hidden")
                            classList.remove("grid")
                            localStorage.clear()
                            localStorage.setItem("PopUpClass", "hidden")
                        }
                        location.reload()
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