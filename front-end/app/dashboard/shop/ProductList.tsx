"use client"
import { productListValues } from '@/components/ImportedValues'
import { boughtProductsInterface } from '@/components/Interfaces'
import React, { useEffect, useRef } from 'react'

function ProductList({costAddition} : {costAddition : (value : number)=>void}) {
  const removeButton = useRef<HTMLButtonElement>(null)
  useEffect(()=>{
    costAddition(productListValues.reduce((acc, item)=>acc + (item.cost * item.count), 0))
  }, [productListValues])
  return (
    <section className=" pList border-2 overflow-y-scroll h-96 p-2">
        <h1 className='text-center text-xl'>Products in Basket</h1>
        {
        productListValues.map((file : boughtProductsInterface)=>{
          return(
          <div className='flex gap-10 place-content-center m-2 border-2 p-1' key={file.id}>
            <h1>
            Name : {file.name}
            </h1>
            <h1>
            cost : {file.cost}
            </h1>
            <h1>
            Count : {file.count}
            </h1>
            <h1>
            total Cost : {file.cost * file.count}
            </h1>

            <button
              onClick={()=>{
                console.log(file.id)
                if(removeButton.current){
                  removeButton.current.disabled = true;
                  location.reload()
                }
              }}
              ref={removeButton}
            >
              Remove item
            </button>
          </div>
         )
        })
        }
    </section>
  )
}

export default ProductList