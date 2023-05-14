import React, { ChangeEventHandler, InputHTMLAttributes, useEffect, useState } from 'react'

interface PopUpInterface{
    ProductName : string,
    ProductCount : number,
    PopUpState : boolean
}

const PopUp = () => {

    const [PopUpSetup, setPopUpSetup] = useState<PopUpInterface>({
        ProductName : "",
        ProductCount : 0,
        PopUpState : false
    })

    useEffect(()=>{
        const state:boolean = localStorage.getItem("PopUpState") === "true" ? true : false
        setPopUpSetup((item)=>{
            return{
                ...item,
                PopUpState : state
            }
        })
    }, [])

    const InputContainer:{name : string, value : number | string, type : string}[] = [
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

    function ClosePopUp(){

    }

    function AddProduct(){

    }
  return (
    <div className=' grid absolute bg-black opacity-70 h-[100%] w-[100vw] z-[9999] place-content-center'>

        <div className=' bg-white opacity-1'>

        {
            InputContainer.map((item)=>{
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
                <button className='buttonReusable' onClick={AddProduct}>
                    Add Product
                </button>

                <button className='buttonReusable' onClick={ClosePopUp}>
                    close
                </button>
            </div>

        </div>
        
    </div>
  )
}

export default PopUp