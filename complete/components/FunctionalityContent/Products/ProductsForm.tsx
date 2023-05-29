"use client"

import React, { useEffect, useState } from 'react';
import FilterData from "../FilterData"
import DueDate from "../DueDate"

export interface Products{
  ProductId : number
  ProductName : string,
  ProductCount : number,
  ProductCost : number,
  Editstate? : boolean
}

const ProductsForm = ({searchTerm, Products, stateDelete, stateUpdate} : {searchTerm : string, Products : Products[], stateDelete : boolean, stateUpdate : boolean}) => {

  const Data = FilterData<Products>(Products, searchTerm.toLocaleLowerCase(), (Products)=>Products.ProductName.toLocaleLowerCase())
  const [UpdateData, setUpdateData] = useState<Products[]>(Data)

  const [Delete, SetDelete] = useState<{DeleteState : boolean, message : string, UpdateState : boolean}>({
    DeleteState : false,
    message : "",
    UpdateState : false
  })

  const [newData, setNewData] = useState<Products>({
        ProductName : "",
        ProductCount : 0,
        ProductCost : 0,
        ProductId : 0
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


  function UpdateMe(table : string, ColumnValues : string[], tableId : number, idColumnName : string, UpdatedValues : string[]){
    const dataToBeSend = {
      tableName : table,
      id : tableId,
      idColumn : idColumnName,
      columns : ColumnValues,
      UpdatedData : UpdatedValues
    }
    return new Promise(async (resolve, reject)=>{
        try{
          const Response = await fetch("http://localhost:3000/DatabaseInfo/UpdateData", {
            method : "POST",
            cache : "no-cache",
            body : JSON.stringify(dataToBeSend),
            headers : {
              'Content-Type': 'application/json',
            }
          })
          const ResponseGotten = await Response.text()
          resolve(ResponseGotten)
          console.log(ResponseGotten)
        }catch(err){
          console.log(`an error occured while sending update data ${err}`)
          reject(err)
        }
    })
  }

  function InputForms(name:string, initialValue : string|number, valueType:string){
    return <input 
      type={valueType}
      name={`${name}`}
      placeholder={`${initialValue}`}
      value={name === "ProductName" ? newData.ProductName : name === "ProductCost" ? newData.ProductCost : name === "ProductCount" ? newData.ProductCount :  ""}
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
      console.log(newData)
  }

  return (
    <div className=' h-[75vh] overflow-y-scroll mt-5 p-2'>
        {
        UpdateData.map((item)=>{
          return(
            <div className=' bg-blue-500 flex mb-5 py-2 rounded-md pl-3 gap-6 place-content-center' key={item.ProductId}>
                <DueDate ArrivalDate="N/A" Count={item.ProductCount} Product={item.ProductName} type="Products"/>
              <div className=' grid'>
                  <h1>Product Name : {
                  item.Editstate! ?
                    InputForms("ProductName", item.ProductName.toLowerCase(), "text")
                    :      
                    item.ProductName
                  }</h1>
                  <h1>Product Count : {
                  item.Editstate! ?
                    InputForms("ProductCount", item.ProductCount, "number")
                    :
                    item.ProductCount
                  }</h1>
              </div>

              <div className=' grid'>
                <h1>Product Cost : {
                item.Editstate! ?
                  InputForms("ProductCost", item.ProductCost, "number")
                  :
                  item.ProductCost}</h1>
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
                          <button className=' border-2' onClick={()=>{
                            setUpdateData((content)=>content.map((value)=>value.ProductId === item.ProductId ? {...value, Editstate : true} : value ))
                            console.log(item.Editstate!)
                            }}>
                              Edit Information</button>

                          <button className=' mt-2 border-2' onClick={async ()=>{
                            await UpdateMe("Products", ["ProductName", "ProductCount", "ProductCost"], item.ProductId, "ProductId", [newData.ProductName.toLowerCase(), newData.ProductCount.toString(), newData.ProductCost.toString()])
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

export default ProductsForm