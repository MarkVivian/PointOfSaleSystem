import Image from 'next/image'
import React from 'react'
import placeholder from "@/public/icon_placeHolder.jpg"
import Link from 'next/link';
import { valuesState } from '@/components/ImportedValues';

const LeftNavbar = () => {
  return (
    <main className='relative h-screen border-r-4 border-black min-w-[10rem] dark:border-white'>

        {/* this will handle the icon.... */}
        <div className=" relative w-full h-44 grid place-content-center">
          <Link href={"/dashboard/login"} passHref>
            <Image src={placeholder} alt="icon Image" height={100} width={100} priority className='h-28 rounded-full '/>
          </Link>
        </div>

        {/* other icons*/}
        <div className=' relative grid w-full pt-5'>
          {
            valuesState.map((value)=>{
              return(
                <Link className=' relative grid place-content-center h-14 m-2 text-xl hover-effect rounded-lg' key={value.name} href={value.link}>
                    {value.name}
                </Link>
              )
            })
          }
        </div>

    </main>
  )
}

export default LeftNavbar