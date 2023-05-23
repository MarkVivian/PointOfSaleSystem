"use client"

import React, { useEffect, useState } from 'react';
import FilterData from "../FilterData"

interface UpdateOrders{
    orderId : number,
    SelectionChanged : string
}

export interface Orders{
  OrderId : number,
  OrderedItem : string,
  OrderDate : string, 
  ArrivalDate : string,
  OrderCount : number
}

const OrdersForm = ({searchTerm, Orders, stateDelete, stateUpdate} : {searchTerm : string, Orders : Orders[], stateDelete : boolean, stateUpdate : boolean}) => {

      const Data = FilterData<Orders>(Orders, searchTerm.toLowerCase(), (Orders)=>Orders.OrderedItem.toLowerCase())

      const [Delete, SetDelete] = useState<{stateDelete : boolean, message : string, stateUpdate : boolean, UpdateMe : boolean}>({
        stateDelete : false,
        message : "",
        stateUpdate : false,
        UpdateMe : false
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

      const [UpdateData, setUpdateData] = useState<Orders>({
        OrderedItem: "",
        OrderCount : 0,
        OrderDate : "",
        ArrivalDate : "",
        OrderId : 0
      })

      function UpdateMe(table : string, Columns : string[], id : number, idColumn : string, UpdatedValues : string[]){
        return new Promise((resolve, reject)=>{

        })
      }

      function InputForms(name:string, initialValue : string|number, valueType:string){
        return <input 
          type={valueType}
          name={`${name}`}
          placeholder={`${initialValue}`}
          value={name === "OrderedItem" ? UpdateData.OrderedItem : name === "OrderCount" ? UpdateData.OrderCount : name === "ArrivalDate" ? UpdateData.ArrivalDate : name === "OrderDate" ? UpdateData.OrderDate : ""}
          onChange={UpdateInfo}
        />
      }
    
      function UpdateInfo(event : any){
          const {name, value} = event.target
          setUpdateData((item)=>{
            return{
              ...item,
              [name] : value
            }
          })
          console.log(UpdateData)
      }

      return (
        <div className={" h-[75vh] overflow-y-scroll mt-5 p-2"}>
            {
            Data.map((item)=>{
              return(
                <div className='bg-blue-500 rounded-md m-2 relative flex p-2 gap-4 text-lg place-content-center' key={item.OrderId}>

                  <div className=' grid ' >
                      <h1 className=' mx-2 border-b-2'>Order Name : 
                        {
                          Delete.UpdateMe ?
                            InputForms("OrderedItem", item.OrderedItem, "text")
                                :
                            item.OrderedItem
                        }
                        </h1>

                      <h1 className=' mx-2 border-b-2 pt-1'>Number Of Items : 
                      {
                      Delete.UpdateMe ?
                        InputForms("OrderCount", item.OrderCount, "number")
                          :
                        item.OrderCount
                      }
                      </h1>
                  </div>

                  <div className='grid '>
                  <h1 className=' mx-2 border-b-2'>Order Date : 
                  {
                  Delete.UpdateMe ?
                    InputForms("OrderDate", item.OrderDate.slice(0,10), "text")
                  :
                  item.OrderDate.slice(0,10)
                  }
                  
                  </h1>
                      <h1 className=' mx-2 border-b-2 p-1'>Arrival Date : 
                      {
                      Delete.UpdateMe ?
                        InputForms("ArrivalDate", item.ArrivalDate.slice(0,10), "text")
                            :
                        item.ArrivalDate.slice(0,10)
                      }</h1>
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
                          <button className=' border-2' onClick={()=>{
                            SetDelete((content)=>{
                              return{
                                ...content,
                                UpdateMe : !content.UpdateMe
                              }
                            })
                          }}>Edit Information</button>
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