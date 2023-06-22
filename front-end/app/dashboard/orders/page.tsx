import React from 'react'
import {Metadata} from 'next'

export const metadata:Metadata ={
  title : "Orders",
  description : "this is where you can add, delete and update your Orders..."
}

function page() {
  return (
    <div>Orders</div>
  )
}

export default page