import { dashboardContent } from '@/components/ImportedValues'
import React from 'react'
export default function dashboard() {
  return (
    <main className='flex flex-wrap gap-10 place-content-center p-3 relative'>

       {
        dashboardContent.map((item)=>{
          return(
            <section className='border-4 border-white h-72 w-102' key={0}>
                {item}
            </section>
          )
        })
       }

    </main>
  )
}
