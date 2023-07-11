import React from 'react'
import {Metadata} from 'next'
import TopFeature from '@/components/ordersProducts/TopFeature'
import OrdersProductsCard from '@/components/ordersProducts/OrdersProductsCard'

export const metadata:Metadata ={
  title : "Orders",
  description : "this is where you can add, delete and update your Orders..."
}

function page() {
  return (
    <main className='relative py-3'>

      <TopFeature type='orders'/>

          <OrdersProductsCard 
            dataToWrite={[{
              orderItem : "Incididunt.",
              orderCount : 0,
              orderDate : "/fdsf/fsd/sdfs",
              arrivalDate : "fdsf/fsd/fdsf",
              orderId : 0
            }]}
            showImage={false}
            type='orders'
            modifyState={false}
            deleteState={false}
          />

      <div className='flex w-full place-content-center p-2 gap-10'>
        <button className=' border-2 bg-gray-500 px-5 py-1 rounded-lg hover:font-bold hover:text-lg duration-150'>filter by months</button>
        <button className=' border-2 bg-gray-500 px-5 py-1 rounded-lg hover:font-bold hover:text-lg duration-150'>filter expired orders</button>
      </div>

    </main>
  )
}

export default page