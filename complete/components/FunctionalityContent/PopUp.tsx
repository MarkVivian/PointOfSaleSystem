"use client"
import React, { useRef, useState } from 'react'

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
            name : "ProductCost",
            value : ProductSetup.ProductCost,
            type : 'number'
        }
    ]

    const OrderContainer:{name : string, value : number | string, type : string}[] = [
        {
            name : "OrderedItem",
            value : OrderSetup.OrderedItem,
            type : "string"
        },
        {
            name : "OrderDate",
            value : OrderSetup.OrderDate,
            type : "string"
        },
        {
            name : "ArrivalDate",
            value : OrderSetup.ArrivalDate,
            type : "string"
        },
        {
            name : "OrderCount",
            value : OrderSetup.OrderCount,
            type : "number"
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

        console.log(`the value was ${value} for the name ${name}`)
    }

    async function AddItem(){
        const {OrderedItem, OrderDate, OrderCount, ArrivalDate} = OrderSetup
        const {ProductName, ProductCost, ProductCount} = ProductSetup

        if(searchQuery === "Orders"){
            const DataValue = {
                "DataToWrite" : [OrderCount.toString(), OrderDate, OrderedItem, ArrivalDate],
                "Columns" : ["OrderCount", "OrderDate", "OrderedItem", "ArrivalDate"],
                "tableName" : "Orders"
            }

            const Response = await fetch(
                "http://localhost:3000/DatabaseInfo/Data",
                {
                    next : {
                        revalidate : 10
                    },
                    body:JSON.stringify(DataValue)
                })
        }else if(searchQuery === "Products"){
           // const DB = new Database()
           // DB.WriteToDatabase([ProductName, ProductCost.toString(), ProductCount.toString()], ["ProductName", "ProductCost", "ProductCount"], "Products")
            //await SendData([ProductName, ProductCost.toString(), ProductCount.toString()], ["ProductName", "ProductCost", "ProductCount"], "Products")
        }else{
            throw new Error("invalid url is being used")
        }
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
                    searchQuery === "Orders" ?
                        OrderContainer.map((item)=>{
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