"use client"
import React, { useEffect, useRef, useState } from 'react'

interface ProductsInterface{
        ProductName : string,
        ProductCount : number,
        ProductCost : number
}
interface OrdersInterface {
    OrderedItem : string,
    OrderDate : string,
    ArrivalDate : string,
    OrderCount : number 
}

const PopUp:React.FC<{searchQuery : string}> = ({searchQuery}) => {

    const HidePopUp = useRef<HTMLDivElement>(null)

    const [others , setOthers] = useState<Promise<string> | string>()

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
        const {name, value, type} = event.target
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

    async function WriteData(info : any):Promise<string>{
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
                    body:JSON.stringify(info)
                })
                setOthers(Response.text())
            }catch(err){
                reject(err)
                setOthers("an error occured while writting to the database")
                console.log("an error occured while updating " + err)
            }
        })
    }

    async function AddItem(){
        const {OrderedItem, OrderDate, OrderCount, ArrivalDate} = OrderSetup
        const {ProductName, ProductCost, ProductCount} = ProductSetup

        if(searchQuery === "Orders"){
                await WriteData({
                    "DataToWrite" : [OrderCount, OrderDate, OrderedItem, ArrivalDate],
                    "Columns" : ["OrderCount", "OrderDate", "OrderedItem", "ArrivalDate"],
                    "tableName" : "Orders"
                })
                location.reload()
                //setOthers("succesfully added item to the store")
        }else if(searchQuery === "Products"){
            await WriteData({
                "DataToWrite" : [ProductName, ProductCost, ProductCount],
                "Columns" : ["ProductName", "ProductCost", "ProductCount"],
                "tableName" : "Products"
            })
        }else{
            throw new Error("invalid url is being used")
        }

    }

    useEffect(()=>{
        const classState = localStorage.getItem("PopUpClass")
        if(HidePopUp.current && classState){
            const classList = HidePopUp.current.classList
            classList.add(classState)
        }
    }, [])

  return (
    <>
        <button className='buttonReusable' onClick={()=>{
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

        <div className=' absolute z-[999] hidden bg-black h-[100%] w-[100vw] opacity-80 place-content-center' ref={HidePopUp}>


            <div className=' bg-white opacity-1 w-[20rem] h-[20rem]'>
                    <span>
                        ENTER APPROPRIATE INFORMATION HERE
                    </span>
                    <h1 className=' text-green-500'>
                        {others!}
                    </h1>

                {
                    searchQuery === "Orders" ?
                        OrderContainer.map((item)=>{
                            return(
                                <div key={item.name} className=' my-2'>
                                    <span>
                                        {item.name}
                                     </span>
                            
                                    <input 
                                        type={`${item.type}`}
                                        placeholder={`${item.placeholder}`}
                                        name={`${item.name}`}
                                        value={item.value}
                                        onChange={ValueChanged}
                                        className=' ml-2 rounded-md'
                                    />
                                </div>
                            )
                        })
                        :
                        ProductContainer.map((item)=>{
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
                            localStorage.clear()
                            localStorage.setItem("PopUpClass", "hidden")
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