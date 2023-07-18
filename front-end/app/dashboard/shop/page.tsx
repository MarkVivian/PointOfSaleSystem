import { Metadata } from 'next'
import React from 'react'
import Shop from './Shop'

export const metadata:Metadata ={
    title : "Shop",
    description : "this is where you can sell your goods"
}

function page() {
  return <Shop />
}

export default page