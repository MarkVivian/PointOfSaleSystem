"use client"
import { productListValues } from '@/components/ImportedValues'
import { boughtProductsInterface } from '@/components/Interfaces'
import React, { useRef } from 'react'

function ProductList() {
  const removeButton = useRef<HTMLButtonElement>(null)

  return (
    <section className=" pList border-2 overflow-y-scroll h-96 p-2">

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