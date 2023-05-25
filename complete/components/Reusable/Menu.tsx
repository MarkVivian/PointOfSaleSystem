"use client"
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'

const Menu = () => {
  const Data:string[] = ["Orders", "Shop", "Products", "Analitics", "home"]
  const MenuDiv = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(MenuDiv.current){
        const classL = MenuDiv.current.classList
        classL.add("hidden")
    }
  },[])
  return (
    <section className='absolute z-[9999]'>
        <button className=' p-2 m-[.125rem] ml-2' onClick={()=>{
            if(MenuDiv.current){
                const listClasses = MenuDiv.current.classList
                listClasses.toggle("hidden")
            }
        }}>
            Menu
        </button>

        <div className='Menu grid hidden bg-gradient2' ref={MenuDiv}>
            {
                Data.map((item)=>{
                    return(
                        <Link href={item === "home" ? `/` : `/${item}/?searchQuery=${item}`} key={item} className=' m-2 p-2 text-lg hover:text-sm duration-100' onClick={()=>{
                            if(MenuDiv.current){
                                const classL = MenuDiv.current.classList
                                classL.add("hidden")
                            }
                        }}>
                            {item}
                        </Link>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Menu