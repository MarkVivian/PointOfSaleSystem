"use client"
import React, { useState } from 'react'

function SearchProduct() {

    const [inputDetails, setInputDetails] = useState<{ProductName : string, cost : number}>({
        ProductName : "",
        cost : 0
    })

  function Typed(event : React.ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target
        setInputDetails((file)=>{
            return{
                ...file,
                [name] : value
            }
        })
  }  

  const searchProductsName = [
    {
        productName : "Hammer",
        productCost : 0
    }
  ]

  return (
    <section className='pSearch border-4'>
        <form action="" method="post" className='flex gap-10 relative'>
            <div>
                Product Name : 
                <input 
                    type='text'
                    name='ProductName'
                    className='text-black'
                    onChange={Typed}
                    value={inputDetails.ProductName}
                />

                {searchProductsName.map((file)=>{
                    return(
                        <div key={file.productName} className='gap-10 flex'>
                            <h1>ProductName : {file.productName}</h1>
                            <h1>productCost : {file.productCost}</h1>
                        </div>
                    )
                })}

            </div>

            <div>
                Count : 
                <input 
                    type='number'
                    name='cost'
                    className='mx-1 text-black'
                    onChange={Typed}
                    value={inputDetails.cost}
                />

                <div>
                    Jokes of the day goes here.... 
                </div>
            </div>

            <button>
                Add
            </button>

        </form>

    </section>
  )
}

export default SearchProduct