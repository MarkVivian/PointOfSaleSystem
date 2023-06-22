import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata ={
    title : "Shop",
    description : "this is where you can sell your goods"
}

function page() {
  return (
    <div>Shop</div>
  )
}

export default page