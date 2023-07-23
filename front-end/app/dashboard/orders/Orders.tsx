"use client"
import React, { useState } from 'react'
import TopFeature from '@/components/ordersProducts/TopFeature'
import OrdersProductsCard from '@/components/ordersProducts/OrdersProductsCard'
import { stateManagementInterface } from '@/components/Interfaces'
import { OrderValues } from '@/components/ImportedValues'

function Orders() {
    const [stateManagement, setStateManagement] = useState<stateManagementInterface>({
        modifyState : false,
        deleteState : false
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
    <main className='Orders'>

      <TopFeature type='orders' HandleStates={HandleStates}/>

          <OrdersProductsCard 
            dataToWrite={OrderValues}
            type='orders'
            modifyState={stateManagement.modifyState}
            deleteState={stateManagement.deleteState}
          />

      <div className='flex w-full place-content-center p-2 gap-10'>
        <button className='buttons'>filter by months</button>
        <button className='buttons'>filter expired orders</button>
      </div>

    </main>
  )
}

export default Orders