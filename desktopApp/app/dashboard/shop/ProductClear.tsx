"use client"
import React, { ChangeEvent, useState } from 'react'

export default function ProductClear() {
  const [inputDetails, setInputDetails] = useState<{totalCost : number, moneyGiven : number}>({
      totalCost : 0,
      moneyGiven : 0
  })

  const productClearValues:{name : string, inputName : string, disabled : boolean, value : number}[] = [
    {
      name : "totalCost",
      inputName : "totalCost",
      disabled : true,
      value : inputDetails.totalCost
  
    },
    {
      name : "money given",
      inputName : "moneyGiven",
      disabled : false,
      value : inputDetails.moneyGiven
    },
    {
      name : "change", 
      inputName : "change",
      disabled : true,
      value : inputDetails.moneyGiven === 0 ? 0 : inputDetails.moneyGiven - inputDetails.totalCost
    }
  ]

  function InputChange(event : ChangeEvent<HTMLInputElement>){
      const {name, value} = event.target
      setInputDetails((file)=>{
        return{
          ...file,
          [name] : value
        }
      })
  }

  return (
    <section className='pClear flex border-2 gap-10 p-3 place-content-center'>
      {
        productClearValues.map((file)=>{
          return(
            <div key={file.name}>

                <h1 className='text-center text-lg'>
                  {file.name}
                </h1>

                <input 
                  type="number" 
                  name={file.inputName}
                  disabled = {file.disabled}
                  value={file.value}
                  onChange={InputChange}
                  className='text-black'
                />

            </div>
          )
        })
      }
      
      <button>
        Done
      </button>
    </section>
  )
}
