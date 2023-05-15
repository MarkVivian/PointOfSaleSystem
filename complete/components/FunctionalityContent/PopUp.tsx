"use client"
import React, { useRef, useState } from 'react'

interface PopUpInterface{
    ProductName : string,
    ProductCount : number,
}

const PopUp:React.FC<{searchQuery : string}> = ({searchQuery}) => {

    const HidePopUp = useRef<HTMLDivElement>(null)

    const [PopUpSetup, setPopUpSetup] = useState<PopUpInterface>({
        ProductName : "",
        ProductCount : 0,
    })


    const ProductContainer:{name : string, value : number | string, type : string}[] = [
        {
            name : "ProductName",
            value : PopUpSetup.ProductName,
            type : "text"
        },
        {
            name : "ProductCount",
            value : PopUpSetup.ProductCount,
            type : "number" 
        }
    ]

    function ValueChanged(event : any){
        const {name, value, type} = event.target
        console.log(`the name ${name} has a value ${value}`)
        setPopUpSetup((item)=>{
            return{
                ...item,
                [name] : value
            }   
        })
    }

    function AddItem(){
        
    }

  return (
    <>
        <button className=" border-2 p-2 rounded-lg ml-2" onClick={()=>{
            if(HidePopUp.current){
                const classList = HidePopUp.current.classList
                classList.remove("hidden")
                classList.add("grid")
            }
        }}>
            Add {searchQuery}
        </button>

        <div className=' absolute z-[999] hidden bg-black h-[100%] w-[100vw] opacity-80 place-content-center' ref={HidePopUp}>


            <div className=' bg-white opacity-1 w-[20rem] h-[20rem]'>
                    <span>
                        ENTER APPROPRIATE INFORMATION HERE
                    </span>
                {
                    ProductContainer.map((item)=>{
                        return(
                            <div key={item.name} className=' my-2'>
                                <span>
                                    {item.name}
                                 </span>
                        
                                <input 
                                    type={`${item.type}`}
                                    placeholder={`${item.name}`}
                                    name={`${item.name}`}
                                    value={item.value}
                                    onChange={ValueChanged}
                                    className=' ml-2 rounded-md'
                                />
                            </div>
                        )
                    })
                }       

                <div>
                    <button className='buttonReusable' onClick={AddItem}>
                        Add {searchQuery}
                    </button>

                    <button className='buttonReusable' onClick={()=>{
                        if(HidePopUp.current){
                            const classList = HidePopUp.current.classList
                            classList.add("hidden")
                            classList.remove("grid")
                        }
                    }}>
                        close
                    </button>

                </div>

            </div>
                
        </div>
    </>
  )
}

export default PopUp