import Image from 'next/image'
import React from 'react'
import placeholder from "@/public/icon_placeHolder.jpg"
import Link from 'next/link';

const LeftNavbar = () => {
  const icons = [
    {
      name : "Home",
      link : "/"
    },
    {
      name : "Orders",
      link : "/dashboard/orders"
    },
    {
      name : "Products",
      link : "/dashboard/products"
    },
    {
      name : "Shop",
      link : "/dashboard/shop"
    },
    {
      name : "Dashboard",
      link : "/dashboard"
    },
    {
      name : "Settings",
      link : "/dashboard/settings"
    }
  ]
  return (
    <main className='relative h-screen border-r-4 border-black w-40 dark:border-white'>

        {/* this will handle the icon.... */}
        <div className=" relative w-full h-44 grid place-content-center">
          <Link href={"/"} passHref>
            <Image src={placeholder} alt="icon Image" height={100} width={100} priority className='h-28 rounded-full '/>
          </Link>
        </div>

        {/* other icons*/}
        <div className=' relative grid w-full pt-5'>
          {
            icons.map((value)=>{
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