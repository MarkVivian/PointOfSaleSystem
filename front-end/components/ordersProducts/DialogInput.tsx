import React from 'react'
import { DialogInputInterface, dialogValuesInterface} from '../Interfaces'

function DialogInput(
  {buttonReference, dialogReference, type, changeModifierFunction, addinfo, fileAddingModifier}
  :
  DialogInputInterface
  ) {
    const dialogValues : dialogValuesInterface = {
        orders : [
          {
            h1Value : "Ordered Item",
            inputType : "text",
            nameValue : "orderItem",
            inputValue : addinfo.orderItem,
            placeholder: "Soap"
          },
          {
            h1Value : "Order Count",
            inputType : "number",
            nameValue : "orderCount",
            inputValue : addinfo.orderCount,
            placeholder: "12"
          },
          {
            h1Value : "Order Date",
            inputType : "text",
            nameValue : "orderDate",
            inputValue : addinfo.orderDate,
            placeholder: "dd/mm/yyyy"
          },
          {
            h1Value : "arrival date",
            inputType : "text",
            nameValue : "arrivalDate",
            inputValue : addinfo.arrivalDate,
            placeholder: "dd/mm/yyyy"
          }
        ],
        products : [
          {
            h1Value : "Product Name",
            inputType : "text",
            nameValue : "productName",
            inputValue : addinfo.productName
          },
          {
            h1Value : "Product Description",
            inputType : "text",
            nameValue : "productDescription",
            inputValue : addinfo.productDescription
          },
          {
            h1Value : "Product Count",
            inputType : "number",
            nameValue : "productCount",
            inputValue : addinfo.productCount
          },
          {
            h1Value : "Product Cost",
            inputType : "number",
            nameValue : "productCost",
            inputValue : addinfo.productCost
          },
          {
            h1Value : "Product Image[optional]",
            inputType : "file",
            nameValue : "productImage",
            inputValues : addinfo.productImage!,
            accept : "image/*"
          }
        ]
      }

  return (
    <dialog  ref={dialogReference} className='bg-gray-500 rounded-lg text-white'>
          <div className='text-center'>
            <h1 className='text-xl font-extrabold'>Add {type} here</h1>
            <hr />
            <h2 className='text-red-800 font-bold'>Error message goes here</h2>
          </div>

          <div className='relative grid gap-5 p-5'>
            {
              type === "orders" ?
                dialogValues.orders.map((file)=>{
                  return(
                    <div className='flex gap-5' key={file.h1Value}>
                      <h1 className=' py-2 text-lg float-right w-28'>{file.h1Value}</h1>
                      <input 
                      placeholder={file.placeholder}
                      type={file.inputType} 
                      name={file.nameValue} 
                      onChange={changeModifierFunction} 
                      value={file.inputValue} 
                      className="text-black p-2 rounded-lg border-none text-lg flex-1"/>
                    </div>
                  )
                })
                :
                dialogValues.products.map((file)=>{
                  return(
                    <div className='flex gap-5' key={file.h1Value}>
                        <h1 className=' py-2 text-lg float-right w-48'>{file.h1Value}</h1>
                      {
                        file.inputType === "file" ? 
                        <input 
                          type={file.inputType}
                          accept={file.accept!}
                          onChange={fileAddingModifier}
                        />
                        :
                        <input 
                            type={`${file.inputType}`} 
                            name={`${file.nameValue}`} 
                            onChange={changeModifierFunction} 
                            value={file.inputValue} 
                            className="text-black p-2 rounded-lg border-none text-lg flex-1"/>
                      }
                          </div>
                  )
                })
              }
          </div>

            <hr />

          <div className='flex gap-10 w-full place-content-center h-fit mt-3'>
            <button 
              className={`bg-gray-600 rounded-lg p-3 hover:text-lg ${buttonReference.current?.disabled ? 'pointer-events-none' : ''}`}
              ref={buttonReference}
              onClick={()=>{
                console.log(dialogValues.products)
                if(buttonReference.current){
                  buttonReference.current.disabled = true
                }
              }}
            >
              Add {type}
            </button>

            <button 
              onClick={()=>{
                if(dialogReference.current && buttonReference.current){
                dialogReference.current.close()
                buttonReference.current.disabled = false
              }
              location.reload()
            }}
              className=' bg-gray-600 rounded-lg p-3 hover:text-lg '
            >
              Close
            </button>
          </div>

    </dialog>
  )
}

export default DialogInput