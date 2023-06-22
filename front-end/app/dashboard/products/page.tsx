import React from 'react'
import {Metadata} from 'next'

export const metadata:Metadata ={
  title : "Products",
  description : "this is where you can add, delete and update your products..."
}

function page() {
  return (
    <div>Products</div>
  )
}

export default page