"use client"
import React, { useState } from 'react'
import TopFeature from '@/components/ordersProducts/TopFeature'
import OrdersProductsCard from '@/components/ordersProducts/OrdersProductsCard'
import { stateManagementInterface } from '@/components/Interfaces'

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
    <main className='relative py-3'>

        <TopFeature type='products' HandleStates={HandleStates} />

        <OrdersProductsCard 
          showImage={stateManagement.showImages!}
          dataToWrite={[{
            productCost : 100,
            productCount : 0,
            productImage : "",
            productDescription : "Eu labore esse reprehenderit tempor tempor.",
            productName : "Nisi sint pariatur magna culpa.",
            productId : 0
          }]}
          type='products'
          modifyState={stateManagement.modifyState}
          deleteState={stateManagement.deleteState}/>

        <div className='flex w-full place-content-center p-2'>
            <button className=' border-2 bg-gray-500 px-5 py-1 rounded-lg hover:font-bold hover:text-lg duration-150'
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