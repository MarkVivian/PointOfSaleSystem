"use client"
import React, { useState } from 'react'
import Themes from './Themes'
import Appearance from './Appearance'
import Creator from './Creator'

function Settings() {
    const [content, setContent] = useState<String>("talk to Creator")

  return (
    <main className='p-5 h-screen w-screen relative'>
        <h1 className='text-center font-bold text-xl'>
            Settings
        </h1>
        <hr />
        <section className='flex h-full relative'>
            <div className=' border-r-4 border-white p-3 h-full w-40'>
                {
                    settingsValues.map((file)=>{
                        return(
                            <button 
                            className=' relative p-2 text-xl hover-effect rounded-lg my-5'
                            key={file}
                            onClick={()=>{setContent(file)}}
                            >
                                {file}
                            </button>
                        )
                    })
                }
            </div>

            <div className='bg-green-600 w-full'>
                {content === "Themes" ? <Themes /> :
                content === "Appearance" ? <Appearance /> :
                content === "talk to Creator" ? <Creator />
                : ""
                }
            </div>
        </section>
    </main>
  )
}

const settingsValues = [
    "Themes",
    "Appearance",
    "talk to Creator"
]

export default Settings