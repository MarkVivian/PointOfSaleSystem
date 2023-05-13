"use client"
import Link from 'next/link'
import React from 'react'

export default function Error({error, state} : {error : Error, state : ()=>void}){
 
  return (
    <div className=' h-[100vh] bg-blue-500 grid justify-center place-content-center relative'>
      <h1 className=' font-extrabold text-xl text-center mb-4'>Error Message </h1>
      <p className=' font-bold text-lg'>
        An error occured while Reading the URL. Press the button below to go home.
      </p>
      <button className=' border-2 border-white w-max rounded-lg p-4 mx-auto mt-3'>
        <Link href="/" className='w-0 font-bold text-lg hover:text-xl duration-75'>
          Home
        </Link>
      </button>
    </div>
  )
}