import React from 'react'
import calendarOrders from "@/app/dashboard/dashboardContent/calendarOrders"
import monthAnalysis from "@/app/dashboard/dashboardContent/monthAnalysis"
import productAnalytics from "@/app/dashboard/dashboardContent/productAnalytics"
import productTracking from "@/app/dashboard/dashboardContent/productTracking"

const dashboardContent:JSX.Element[] = [
  calendarOrders(),
  monthAnalysis(),
  productAnalytics(),
  productTracking()
]

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
