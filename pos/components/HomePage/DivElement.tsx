"use client"

interface DataProps {
    title : string,
    image : any
}

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const DivElement:React.FC<DataProps> = (dataProp) => {
  return (
    <Link href="" className=' relative'>
      
      <Image src={dataProp.image} alt='section image' width={100} priority className=' w-[16rem] h-[13rem]' />
      
      <div className='dataPropText text-white absolute bottom-0 bg-black opacity-60 hover:opacity-100 h-full w-full text-[36px] flex place-items-center justify-center'>
          {dataProp.title}
      </div>            
      
    </Link>

  )
}

export default DivElement