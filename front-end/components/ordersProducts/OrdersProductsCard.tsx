"use client"
import React, { ChangeEvent, useState } from 'react'
import { orderInterface, productInterface } from '../Interfaces'
import Image from 'next/image'
import OrdersProductsButtons from './OrdersProductsButtons'

function OrdersProductsCard({dataToWrite, showImage, type, modifyState, deleteState} : {type : string, dataToWrite : orderInterface[] | productInterface[], showImage? : boolean, modifyState : boolean, deleteState : boolean}) {
  const [inputOrders, setInputOrders] = useState({
    newOrderedItem : "",
    newOrderCount : 0,
    newOrderDate: "",
    newArrivalDate: ""
  })
  const [inputProducts, setInputProducts] = useState({
    newProductName : "",
    newProductDescription : "",
    newProductCount : 0,
    newProductCost : 0,
    newProductImage : "",
    newProductId : 0
  })

  const [inputControl, setInputControl] = useState<{editInfo: boolean, delete: boolean, idValue : number}>({
    editInfo : false,
    delete : false,
    idValue : 0
  })
  function inputChange(event : ChangeEvent<HTMLInputElement>){
      const {name, value} = event.target      
      if(type === "orders"){
        setInputOrders((file)=>{
          return{
            ...file,
            [name] : value
          }
        })
      }else{
        setInputProducts((file)=>{
          return{
            ...file,
            [name] : value
          }
        })
      }
    }

    function InputControlChanger(file:orderInterface|productInterface, inputControlEditInfo:boolean, type:string){
      setInputControl((content)=>{
        return{
          ...content,
          idValue: type==="orders"? (file as orderInterface).orderId : (file as productInterface).productId,
          editInfo: !inputControlEditInfo
        }
      })
    }

    function fileAddingModifier(event: React.ChangeEvent<HTMLInputElement>){
      const file = event.target.files?.[0] || null
      console.log(file)
      setInputProducts((content)=>{
        return{
          ...content,
          productImage: file
        }
      })
    }
  return (
    <section className='card'>
        {
          type === "orders" ?
            (dataToWrite as orderInterface[]).map((file:orderInterface)=>{
              return(
                <div key={file.orderId} className='orderCard'>
                  <div>
                    <h1>Ordered Item</h1>:
                    {
                     !inputControl.editInfo ? 
                    <h2>{file.orderItem}</h2>
                    :
                      file.orderId === inputControl.idValue ?
                    <input 
                      type="text" 
                      name='newOrderedItem'
                      placeholder={`${file.orderItem}`} 
                      value={inputOrders.newOrderedItem} 
                      onChange={inputChange} />
                        :
                        <h2>{file.orderItem}</h2>
                      }
                    </div> 

                  <div>
                    <h1>No of items</h1>:
                    {
                      !inputControl.editInfo ?
                      <h2>{file.orderCount}</h2>
                    :
                    inputControl.idValue === file.orderId ?
                    <input 
                      type="number" 
                      name='newOrderCount'
                      placeholder={`${file.orderCount}`} 
                      value={inputOrders.newOrderCount} 
                      onChange={inputChange} />
                      :
                      <h2>{file.orderCount}</h2>
                      }
                  </div> 

                  <div>
                    <h1>date of Order</h1>:
                    {
                     !inputControl.editInfo ? 
                    <h2>{file.orderDate}</h2>
                    :
                    inputControl.idValue === file.orderId ?
                    <input 
                      type="text" 
                      name='newOrderDate'
                      placeholder={`${file.orderDate}`} 
                      value={inputOrders.newOrderDate} 
                      onChange={inputChange} />
                    :
                        <h2>{file.orderDate}</h2>
                      }
                  </div> 

                  <div>
                    <h1>arrival date</h1>:
                    {
                     !inputControl.editInfo ? 
                    <h2>{file.arrivalDate}</h2>
                    :
                    inputControl.idValue === file.orderId ?
                    <input 
                      type="number" 
                      name='newArrivalDate'
                      placeholder={`${file.arrivalDate}`} 
                      value={inputOrders.newArrivalDate} 
                      onChange={inputChange} />
                    :
                        <h2>{file.arrivalDate}</h2>
                      }
                  </div> 

                  <OrdersProductsButtons 
                  InputControlChanger={InputControlChanger}
                  fileValues={file}
                  inputControlEditInfo={inputControl.editInfo}
                  modifyState={modifyState}
                  deleteState={deleteState}
                  type={type}
                  />

                </div>
              )
            })
            :
            (dataToWrite as productInterface[]).map((file:productInterface)=>{
              return(
                <div key={file.productId} className='productCard'>
                  {
                    showImage! ?
                      !inputControl.editInfo ?
                        <Image src={""} alt='random image' width={100} height={100}/>
                            :
                        inputControl.idValue === file.productId ?
                        <input 
                        type="file"
                        accept="image/*"
                        onChange={fileAddingModifier}
                        />
                      : "" : ""
                  }
                    <div>
                      <h1>Product Name</h1>:
                      {
                      !inputControl.editInfo ? 
                      <h2>{file.productName}</h2>
                      :
                      inputControl.idValue === file.productId ?
                      <input 
                        type="text" 
                        name='newProductName'
                        placeholder={`${file.productName}`} 
                        value={inputProducts.newProductName} 
                        onChange={inputChange} />
                      :
                          <h2>{file.productName}</h2>
                        }
                    </div>

                    <div>
                      <h1>Product Description</h1>:
                      {
                      !inputControl.editInfo ? 
                      <h2>{file.productDescription}</h2>
                      :
                      inputControl.idValue === file.productId ?
                      <input 
                        type="text" 
                        name='newProductDescription'
                        placeholder={`${file.productDescription}`} 
                        value={inputProducts.newProductDescription} 
                        onChange={inputChange} />
                      :
                          <h2>{file.productDescription}</h2>
                        }
                    </div>

                    <div>
                      <h1>Product Count</h1>:
                      {
                      !inputControl.editInfo ? 
                      <h2>{file.productCount}</h2>
                      :
                      inputControl.idValue === file.productId ?
                      <input 
                        type="number" 
                        name='newProductCount'
                        placeholder={`${file.productCount}`} 
                        value={inputProducts.newProductCount} 
                        onChange={inputChange} />
                      :
                          <h2>{file.productCount}</h2>
                        }
                    </div>

                    <div>
                      <h1>Product cost</h1>:
                      {
                      !inputControl.editInfo ? 
                      <h2>{file.productCost}</h2>
                      :
                      inputControl.idValue === file.productId ?
                      <input 
                        type="text" 
                        name='newProductCost'
                        placeholder={`${file.productCost}`} 
                        value={inputProducts.newProductCost} 
                        onChange={inputChange} />
                      :
                          <h2>{file.productCost}</h2>
                        }
                    </div>
                  
                  <OrdersProductsButtons 
                  InputControlChanger={InputControlChanger}
                  fileValues={file}
                  inputControlEditInfo={inputControl.editInfo}
                  modifyState={modifyState}
                  deleteState={deleteState}
                  type={type}
                  />

                </div>
              )
            })
         }

    </section>
  )
}

export default OrdersProductsCard