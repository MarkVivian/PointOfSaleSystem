"use client"
import React, { useState } from 'react'
import TopFeature from '@/components/ordersProducts/TopFeature'
import OrdersProductsCard from '@/components/ordersProducts/OrdersProductsCard'
import { stateManagementInterface } from '@/components/Interfaces'

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
    <main className='relative py-3'>

      <TopFeature type='orders' HandleStates={HandleStates}/>

          <OrdersProductsCard 
            dataToWrite={[{
              orderItem : "Incididunt.",
              orderCount : 0,
              orderDate : "/fdsf/fsd/sdfs",
              arrivalDate : "fdsf/fsd/fdsf",
              orderId : 0
            }]}
            type='orders'
            modifyState={stateManagement.modifyState}
            deleteState={stateManagement.deleteState}
          />

      <div className='flex w-full place-content-center p-2 gap-10'>
        <button className=' border-2 bg-gray-500 px-5 py-1 rounded-lg hover:font-bold hover:text-lg duration-150'>filter by months</button>
        <button className=' border-2 bg-gray-500 px-5 py-1 rounded-lg hover:font-bold hover:text-lg duration-150'>filter expired orders</button>
      </div>

    </main>
  )
}

export default Orders