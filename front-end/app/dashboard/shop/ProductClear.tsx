"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'

export default function ProductClear({cost} : {cost : number}) {
  const [inputDetails, setInputDetails] = useState<{totalCost : number, moneyGiven : number}>({
      totalCost : 0,
      moneyGiven : 0
  })

  useEffect(()=>{
    console.log(cost)
    setInputDetails((val)=>{
      return{
        ...val,
        totalCost : cost
      }
    })
  },[cost])

  console.log("input details : ",inputDetails)

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
            [name] : Number(value)
          }
        })
  }// todo : the totalcost should change when the number of items in the product basket changes

  return (
    <section className='pClear '>
      <div className='flex gap-10 p-3 place-content-center'>
          {
            productClearValues.map((file)=>{
              return(
                <div key={file.name} className='flex gap-5'>

                    <h1 className='text-center text-lg'>
                      {file.name}
                    </h1>

                    <input 
                      type="number" 
                      name={file.inputName}
                      disabled = {file.disabled}
                      value={file.value}
                      onChange={InputChange}
                      className={`${file.inputName === "moneyGiven" ? "text-black" : "text-white"} text-center max-w-[8rem]`}
                    />

                </div>
              )
            })
          }
          
          <button className='buttons'>
            Done
          </button>
      </div>
          <h1 className={`text-center pb-4 ${(inputDetails.moneyGiven - inputDetails.totalCost) < 0 ? "text-red-600" : "text-green-500"}`}>
            {
              (inputDetails.moneyGiven - inputDetails.totalCost) < 0 ?
                "insufficient funds given 😠"
                :
                "enjoy the products 😄"
            }
          </h1>
    </section>
  )
}
