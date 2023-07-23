"use client"
import React, { useState } from 'react'
import TopFeature from '@/components/ordersProducts/TopFeature'
import OrdersProductsCard from '@/components/ordersProducts/OrdersProductsCard'
import { stateManagementInterface } from '@/components/Interfaces'
import { ProductsValues } from '@/components/ImportedValues'

function Products() {
    const [stateManagement, setStateManagement] = useState<stateManagementInterface>({
        modifyState : false,
        deleteState : false,
        showImages : false
    })

    function HandleStates(values : Partial<stateManagementInterface>){
        setStateManagement((file)=>{
            return{
                ...file,
                ...values
            }
        })
    }

  return (
    <main className='Products'>

        <TopFeature type='products' HandleStates={HandleStates} />

        <OrdersProductsCard 
          showImage={stateManagement.showImages!}
          dataToWrite={ProductsValues}
          type='products'
          modifyState={stateManagement.modifyState}
          deleteState={stateManagement.deleteState}/>

        <div className='flex w-full place-content-center p-2'>
            <button 
            className='buttons'
            onClick={()=>{setStateManagement((file)=>{return{...file, showImages : !stateManagement.showImages}})}}
            >
                {
                    stateManagement.showImages! ?
                    "hide images"
                    :
                    "show images"
                }
            </button>
        </div>

    </main>
  )
}

export default Products