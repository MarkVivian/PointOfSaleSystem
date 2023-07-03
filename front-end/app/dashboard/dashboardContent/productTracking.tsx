import React from 'react'

function productTracking() {
  return (
    <>
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
    </>
  )
}

export default productTracking