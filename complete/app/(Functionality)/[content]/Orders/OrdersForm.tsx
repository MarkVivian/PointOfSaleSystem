"use client"
import React, { useEffect, useState } from 'react';
import FilterData from "@/components/FilterData"
import DueDate from '@/components/DueDate';
import { Orders } from '@/components/interfaces';
import ApiRequests from '@/components/APIRequests';

const OrdersForm = ({searchTerm, Orders, stateDelete, stateUpdate} : {searchTerm : string, Orders : Orders[], stateDelete : boolean, stateUpdate : boolean}) => {

      const Data = FilterData<Orders>(Orders, searchTerm.toLowerCase(), (Orders)=>Orders.OrderedItem.toLowerCase())
      const [UpdateData, setUpdateData] = useState<Orders[]>(Data)   

      const [Delete, SetDelete] = useState<{stateDelete : boolean, message : string, stateUpdate : boolean}>({
        stateDelete : false,
        message : "",
        stateUpdate : false
      })
      

      const [newData, setNewData] = useState<Orders>({
        OrderedItem : "",
        OrderCount : 0,
        ArrivalDate : "",
        OrderDate : "",
        OrderId : 0
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


      function InputForms(name:string, initialValue : string|number, valueType:string){
        return <input 
          type={valueType}
          name={`${name}`}
          placeholder={`${initialValue}`}
          value={name === "OrderedItem" ? newData.OrderedItem : name === "OrderCount" ? newData.OrderCount : name === "ArrivalDate" ? newData.ArrivalDate : name === "OrderDate" ? newData.OrderDate : ""}
          onChange={UpdateInfo}
        />
      }
    
      function UpdateInfo(event : any){
          const {name, value} = event.target
          setNewData((item)=>{
            return{
              ...item,
              [name] : value
            }
          })
      }

      return (
        <div className={" h-[75vh] overflow-y-scroll mt-5 p-2"}>
            {
            UpdateData.map((item)=>{
              return(
                <div className='bg-blue-500 rounded-md m-2 relative flex p-2 gap-4 text-lg place-content-center' key={item.OrderId}>
                  <DueDate ArrivalDate={item.ArrivalDate} Count={10} Product={item.OrderedItem} type={"Orders"} />
                  <div className=' grid ' >
                      <h1 className=' mx-2 border-b-2'>Order Name : 
                        {
                            item.Editstate! ?
                            InputForms("OrderedItem", item.OrderedItem.toLowerCase(), "text")
                                :
                            item.OrderedItem
                        }
                        </h1>

                      <h1 className=' mx-2 border-b-2 pt-1'>Number Of Items : 
                      {
                        item.Editstate! ?
                        InputForms("OrderCount", item.OrderCount, "number")
                          :
                        item.OrderCount
                      }
                      </h1>
                  </div>

                  <div className='grid '>
                  <h1 className=' mx-2 border-b-2'>Order Date : 
                  {
                  item.Editstate! ?
                    InputForms("OrderDate", item.OrderDate.slice(0,10), "text")
                  :
                  item.OrderDate.slice(0,10)
                  }
                  
                  </h1>
                      <h1 className=' mx-2 border-b-2 p-1'>Arrival Date : 
                      {
                      item.Editstate! ?
                        InputForms("ArrivalDate", item.ArrivalDate, "text")
                            :
                        item.ArrivalDate
                      }</h1>
                  </div>

                  <div className=' grid '>
                      {
                        Delete.stateDelete ?
                      <button onClick={async()=>{
                        try{
                          await ApiRequests.DeleteInServer("Orders", "OrderId", item.OrderId)
                          location.reload()
                        }catch(err){
                          console.error("an error occured while in client while sending a delete request")
                        }

                    }} className=' m-2 border-2 p-1'>select</button>
                        :
                        Delete.stateUpdate ?

                        <>
                          <button className=' border-2' onClick={()=>{
                            setUpdateData((content)=>content.map((value)=>value.OrderId === item.OrderId ? {...value, Editstate : true} : value ))}}>
                              Edit Information</button>

                          <button className=' mt-2 border-2' onClick={async ()=>{
                              await ApiRequests.UpdateInServer("Orders", ["OrderDate", "ArrivalDate", "OrderedItem", "OrderCount"], item.OrderId, "OrderId", [newData.OrderDate, newData.ArrivalDate, newData.OrderedItem.toLowerCase(), newData.OrderCount.toString()])
                              location.reload()
                          }}>Done</button>
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