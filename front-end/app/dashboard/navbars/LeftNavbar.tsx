"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';
import { leftNavbarValues } from '@/components/ImportedValues';


const LeftNavbar = () => {
  const [selected, selectedIcon] = useState<String>("")

  return (
    <main className='relative bg-midBrown grid'>
        {
          leftNavbarValues.map((value)=>{
              return(
                <button 
                key={value.name} 
                className={`leftNavbar ${selected === value.name ? ".active" : ""}`} 
                onClick={()=>selectedIcon(value.name)}>
                    <Link href={value.link} className="" passHref>

                      <Image 
                        src={value.icon} 
                        alt={value.name} 
                        width={100} 
                        height={100}
                        className='image'/>

                      <p className='paragraph'>
                          {value.name}
                      </p>

                    </Link>
                </button>
              );
          })
        }
    </main>
  )
}

export default LeftNavbar