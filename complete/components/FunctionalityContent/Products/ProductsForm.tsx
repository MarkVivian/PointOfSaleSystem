"use client"
//TODO ADD THE EDIT INFORMATION TAB.

import React, { useEffect, useState } from 'react';
import FilterData from "../FilterData"

export interface Products{
  ProductId : number
  ProductName : string,
  ProductCount : string,
  ProductCost : string
}

const ProductsForm = ({searchTerm, Products, stateDelete, stateUpdate} : {searchTerm : string, Products : Products[], stateDelete : boolean, stateUpdate : boolean}) => {

  const Data = FilterData<Products>(Products, searchTerm.toLocaleLowerCase(), (Products)=>Products.ProductName.toLocaleLowerCase())

  const [Delete, SetDelete] = useState<{DeleteState : boolean, message : string, UpdateState : boolean}>({
    DeleteState : false,
    message : "",
    UpdateState : false
  })

  useEffect(()=>{
      SetDelete((item)=>{
        return{
          ...item,
          DeleteState : stateDelete,
          UpdateState : stateUpdate
        }
      })
  }, [stateDelete, stateUpdate])

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
        location.reload()
      }catch(err){
        reject(err)
        console.log("an error occured while deleting Product.")
      }
    })
  }
  return (
    <div className=' h-[75vh] overflow-y-scroll mt-5 p-2'>
        {
        Data.map((item)=>{
          return(
            <div className=' bg-blue-500 flex mb-5 py-2 rounded-md pl-3 gap-6 place-content-center' key={item.ProductId}>
              <div className=' grid'>
                  <h1>Product Name : {item.ProductName}</h1>
                  <h1>Product Count : {item.ProductCount}</h1>
              </div>

              <div className=' grid'>
                <h1>Product Cost : {item.ProductCost}</h1>
              </div>

              <div className=' grid'>
              {
                      Delete.DeleteState ?
                      <button onClick={()=>{
                        DeleteMe(item.ProductId, "ProductId", "Products")
                    }} className=' m-2 border-2 p-1'>  Select</button>
                      :
                      Delete.UpdateState ?
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

export default ProductsForm