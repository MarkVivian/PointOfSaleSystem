import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata ={
  title : "Settings",
  description : "this is where you can modify the appearance of the app.."
}

function page() {
  return (
    <div>Settings</div>
  )
}

export default page