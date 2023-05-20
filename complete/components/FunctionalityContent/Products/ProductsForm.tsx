"use client"

import React, { useEffect, useState } from 'react';
import accept from "@/public/accept.png";
import Image from 'next/image';
import deleteButton from "@/public/delete-button.png"
import { Orders, Products } from '@/Database/Database';
import FilterData from "../FilterData"

interface valuesInterface {
  searchTerm : string,
  Database : any
}

const ProductsForm = ({searchTerm, Products, state} : {searchTerm : string, Products : Products[], state : boolean}) => {

  const Data = FilterData<Products>(Products, searchTerm.toLocaleLowerCase(), (Products)=>Products.ProductName.toLocaleLowerCase())
  const [Delete, SetDelete] = useState<{DeleteState : boolean, message : string, done : boolean}>({
    DeleteState : false,
    message : "",
    done : false
  })
  useEffect(()=>{
      SetDelete((item)=>{
        return{
          ...item,
          DeleteState : state
        }
      })
      localStorage.setItem("delete", `${state}`)
  }, [state])
  function DeleteMe(id:number, column : string, table : string){
    return new Promise(async (resolve, reject)=>{
      const sendBody = {
        tableName : table,
        columnId : id,
        columnName : column
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
        SetDelete((item)=>{
          return{
            ...item,
            done : true
          }
        })
      }catch(err){
        reject(err)
        console.log("an error occured while deleting item.")
      }
    })
  }
  return (
    <div className=' bg-green-400 h-[75vh] overflow-y-scroll mt-5 p-2'>
        {
        Data.map((item)=>{
          return(
            <div className=' bg-blue-500 flex mb-5 h-[3rem] relative py-2 rounded-md pl-3' key={item.ProductId}>
              <h1>{item.ProductName}</h1>
              <div className=' flex absolute gap-4 right-4'>
              {
                      Delete.DeleteState ?
                      Delete.done ?
                      <h2> Deleted </h2>
                      :
                    <button onClick={()=>DeleteMe(item.ProductId, "ProductId", "Products")}><Image src={deleteButton} alt='delete image' width={30} height={30}/></button>
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

export default ProductsForm