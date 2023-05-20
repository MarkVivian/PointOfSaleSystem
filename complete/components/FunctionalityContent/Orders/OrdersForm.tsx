"use client"

import React, { useEffect, useState } from 'react';
import { Orders} from '@/Database/Database';
import FilterData from "../FilterData"

interface UpdateOrders{
    orderId : number,
    SelectionChanged : string
}

const OrdersForm = ({searchTerm, Orders, stateDelete, stateUpdate} : {searchTerm : string, Orders : Orders[], stateDelete : boolean, stateUpdate : boolean}) => {

      const Data = FilterData<Orders>(Orders, searchTerm.toLowerCase(), (Orders)=>Orders.OrderedItem.toLowerCase())

      const [Delete, SetDelete] = useState<{stateDelete : boolean, message : string, stateUpdate : boolean}>({
        stateDelete : false,
        message : "",
        stateUpdate : false
      })

      useEffect(()=>{
        SetDelete((item)=>{
          return{
            ...item,
            stateDelete : stateDelete,
            stateUpdate : stateUpdate
          }
        })
      }, [stateDelete, stateUpdate])

      function DeleteMe(table : string, column : string, OrderId : number){
        return new Promise(async (resolve, reject)=>{
            const sendBody = {
              tableName : table,
              columnName : column,
              columnId : OrderId
            }
            try{
              const Response = await fetch("http://localhost:3000/DatabaseInfo/DeleteData", {
                cache : "no-cache",
                method : "POST",
                body : JSON.stringify(sendBody),
                headers: {
                  'Content-Type': 'application/json', // Set the appropriate Content-Type header
                },
              })
              console.log("i have been sent away")
              location.reload()
            }catch(err){
                reject(err)
                console.log("an error occured while deleting order")
            }
        })
      }

    
      return (
        <div className={" h-[75vh] overflow-y-scroll mt-5 p-2"}>
            {
            Data.map((item)=>{
              return(
                <div className='bg-blue-500 rounded-md m-2 relative flex p-2 gap-4 text-lg place-content-center' key={item.OrderId}>

                  <div className=' grid ' >
                      <h1 className=' mx-2 border-b-2'>Order Name : {item.OrderedItem}</h1>
                      <h1 className=' mx-2 border-b-2 pt-1'>Number Of Items : {item.OrderCount}</h1>
                  </div>

                  <div className='grid '>
                  <h1 className=' mx-2 border-b-2'>Order Date : {item.OrderDate.slice(0,10)}</h1>
                      <h1 className=' mx-2 border-b-2 p-1'>Arrival Date : {item.ArrivalDate.slice(0,10)}</h1>
                  </div>

                  <div className=' grid '>
                      {
                        Delete.stateDelete ?
                      <button onClick={()=>{
                        DeleteMe("Orders", "OrderId", item.OrderId)
                    }} className=' m-2 border-2 p-1'>select</button>
                        :
                        Delete.stateUpdate ?

                        <>
                          <button className=' border-2'>Edit Information</button>
                          <button className=' mt-2 border-2'>Done</button>
                        </>
                        :
                        ""
                      }
                    </div>

                </div>
                    )
              })
              }
    
        </div>
      )
    }

export default OrdersForm