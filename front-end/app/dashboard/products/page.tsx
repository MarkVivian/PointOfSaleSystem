import React from 'react'
import {Metadata} from 'next'
import TopFeature from '@/components/ordersProducts/TopFeature'

export const metadata:Metadata ={
  title : "Products",
  description : "this is where you can add, delete and update your products..."
}

function page() {
  return (
    <main className='relative py-3'>

      <TopFeature type='products'/>

      <section className=' h-97 bg-green-600 mb-3 mx-5'>

      </section>

      <div className='flex w-full place-content-center p-2'>
          <button className=' border-2 bg-gray-500 px-5 py-1 rounded-lg hover:font-bold hover:text-lg duration-150'>No images</button>
      </div>

    </main>
  )
}

export default page