import React from 'react'
import { orderInterface, productInterface } from '../Interfaces'

function OrdersProductsButtons(
    {InputControlChanger, fileValues, inputControlEditInfo, modifyState, deleteState, type}
        :
        {InputControlChanger:(file: orderInterface | productInterface, inputControlEditInfo: boolean, type: string)=>void, 
            fileValues:orderInterface|productInterface, 
            inputControlEditInfo:boolean, 
            modifyState: boolean, 
            deleteState: boolean, 
            type: string}
    ) {
  return (
    <div className='executable'>
    {modifyState ? 
      <>
          <button onClick={()=>{
            InputControlChanger(fileValues, inputControlEditInfo, type)
          if(inputControlEditInfo === true){
            location.reload()
          }
          }}>
            {inputControlEditInfo ? "done editing" : "Edit Information"}
          </button>
      </>
      :
      ""
    }
    {
      deleteState ?
      <button onClick={()=>{
        console.log(fileValues)
        location.reload()
      }}>
        Delete
      </button>
      :
      ""
    }
  </div>
  )
}

export default OrdersProductsButtons