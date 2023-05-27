"use client"
import React, { useEffect, useRef, useState } from 'react'
import menu from "@/public/menu.png"
import Image from 'next/image'

const Menu = () => {
  const Data:string[] = ["Orders", "Shop", "Products", "home"]
  const MenuDiv = useRef<HTMLDivElement>(null)
  const [image, setImage] = useState(false)
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
            setImage(!image)
        }}>
            {
                image ?
                <Image src={menu} alt="Menu Image" className="h-[2rem] w-[2rem] rotate-90 duration-150"/> 
                :
                <Image src={menu} alt="Menu Image" className="h-[2rem] w-[2rem] duration-150"/>
            }
            
        </button>

        <div className='Menu grid hidden bg-gradient2' ref={MenuDiv}>
            {
                Data.map((item)=>{
                    return(
                        <a href={item === "home" ? `/` : `/${item}/?searchQuery=${item}`} key={item} className=' m-2 p-2 text-lg hover:text-sm duration-100' onClick={()=>{
                            if(MenuDiv.current){
                                const classL = MenuDiv.current.classList
                                classL.add("hidden")
                            }

                        }}>
                            {item}
                        </a>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Menu