import Image from 'next/image';
import React from 'react';
import logo from '@/public/navbar/logo.png';

function TopNavbar() {
  return (
    <section className=" bg-midBrown flex">
        <Image src={logo} alt='logo' width={100} height={100} className=' h-10 w-10 ml-5'/>
       <div className=' text-center w-full text-white text-3xl my-auto'>
            POINT OF SALE SYSTEM
       </div>
    </section>
  )
}

export default TopNavbar;