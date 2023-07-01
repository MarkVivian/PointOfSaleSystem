import React from 'react'

function page() {
  return (
    <main className='relative flex p-5 h-screen w-full flex-wrap gap-10 place-content-center'>
       
       <section className='border-4 border-white h-72 w-98 grid'>
              <h1 className=' text-center p-1 text-xl'>
            Analysis of the Products
              </h1>

              <div className='bg-green-700 h-36 mx-5'>

              </div>

              <div className='text-center'>
                    <p>Most Sold Product : </p>
                    <p>least sold Product : </p>
              </div>

       </section>
    
       <section className='border-4 border-white h-72 w-98 grid'>
              <h1 className=' text-center p-1 text-xl'>
            Orders Calendar
              </h1>

              <div className='bg-green-700 h-36 mx-5'>

              </div>

              <div className='text-center'>
                    <p>Orders about to expire : </p>
                    <p>expire Orders : </p>
              </div>

       </section>

       <section className='border-4 border-white h-72 w-98'>
              <h1 className='p-2 text-center text-xl'>
                Depleting Products Tracking
              </h1>

              <div className='flex gap-20 place-content-center'>
                  <div className='grid'>
                      <h1>Depleting Products</h1>
                      <hr/>
                      1. &nbsp; Product 1
                  </div>
                  <div className='grid'>
                      <h1>Current Count</h1>
                      <hr/>
                      1. &nbsp; Count 1
                  </div>
              </div>

      </section>

      <section className='border-4 border-white h-72 w-98 grid'>
              <h1 className=' text-center p-1 text-xl'>
            Analysis for the month
              </h1>

              <div className='bg-green-700 h-36 mx-5'>

              </div>

              <div className='text-center'>
                    <p>Most Effective month : </p>
                    <p>Least effective month : </p>
              </div>

       </section>

    </main>
  )
}

export default page