"use client"
import React from 'react'
import calendarOrders from "@/app/dashboard/dashboardContent/calendarOrders"
import productTracking from "@/app/dashboard/dashboardContent/productTracking"

const dashboardContent:JSX.Element[] = [
  productTracking(),
  calendarOrders() //todo : this should not be a graph.
]

export default function dashboard() {
  /*
  return (
    <main className='flex flex-wrap gap-10 place-content-center p-3 relative h-full text-white'>
       {
        dashboardContent.map((item)=>{
          return(
            <section className='border-4 border-gray-600 h-72 w-102 shadow-lg shadow-gray-500' key={0}>
                {item}
            </section>
          )
        })
       }

    </main>
  )
  */
}
