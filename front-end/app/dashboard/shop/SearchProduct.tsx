"use client"
import { searchProductsName } from '@/components/ImportedValues'
import React, { useEffect, useState } from 'react'

function SearchProduct() {

    const [inputDetails, setInputDetails] = useState<{available : number, ProductName : string,totalCost : number, count : number, cost : number, message : string}>({
        ProductName : "",
        count : 0,
        cost : 0,
        totalCost : 0,
        message : "",
        available : 0
    })

    const [activation, setActivation] = useState<boolean>(true)

  function Typed(event : React.ChangeEvent<HTMLInputElement>){
        const {name, value, type} = event.target
        if(name === "ProductName"){
            setActivation(true)
        }
        setInputDetails((file)=>{
            return{
                ...file,
                [name] : type === "text" ? value : Number(value)
            }
        })
  }  

  useEffect(()=>{
    const item = searchProductsName.find((obj) => obj.productName === inputDetails.ProductName)
    if(item && item.productCount < inputDetails.count){
        setInputDetails((file)=>{
            return{
                ...file,
                message : `😞 please reduce the count or update the product list...`,
                totalCost : inputDetails.cost * inputDetails.count
            }
        })
    }else{
        setInputDetails((file)=>{
            return{
                ...file,
                totalCost : inputDetails.cost * inputDetails.count,
                message : `happy selling 😙`
            }
        })
    }

    if(inputDetails.ProductName === ""){
        setInputDetails((file)=>{
            return{
                ...file,
                available : 0,
                count : 0
            }
        })
    }
  }, [inputDetails.ProductName, inputDetails.cost, inputDetails.count])

  return (
    <section className='pSearch h-fit p-2 flex'>
        <form action="" method="post" className='flex gap-5 relative'>
            <div>
                Product Name : 
                <input 
                    type='text'
                    name='ProductName'
                    className='text-black px-1'
                    onChange={Typed}
                    value={inputDetails.ProductName}
                />

                {
                        inputDetails.ProductName ?
                            activation ?
                <div className=' border-2 max-h-28 overflow-y-scroll mt-2'>
                                {searchProductsName.map((file)=>{
                                    return(
                                        <div key={file.productName} className='gap-10 flex cursor-pointer m-1' onClick={()=>{
                                            setInputDetails((content)=>{
                                                return{
                                                    ...content,
                                                    ProductName : file.productName,
                                                    cost : file.productCost,
                                                    available : file.productCount
                                                }
                                            })
                                            setActivation(false);
                                        }}>
                                            <h1>ProductName : {file.productName}</h1>
                                            <h1>productCost : {file.productCost}</h1>
                                        </div>
                                    )
                                })}
                    
                </div>
                        :
                        ""
                    :
                    ""
                }

            </div>

            <div>
                Cost : 
                <input 
                    className='mx-1 text-white px-1 max-w-[6rem]'
                    value={`${inputDetails.totalCost === 0 ? inputDetails.cost : inputDetails.totalCost}.Ksh`}
                    disabled={true}
                />
            </div>

            <div>
                <div className='flex gap-10'>
                    <div>
                        Available : 
                        <input 
                            className='mx-1 text-white max-w-[2.5rem] px-1'
                            value={inputDetails.available}
                            disabled={true}
                        />
                    </div>

                    <div>
                        Count : 
                        <input 
                            type='number'
                            name='count'
                            className='mx-1 text-black max-w-[5rem] px-1'
                            onChange={Typed}
                            value={inputDetails.count}
                        />
                    </div>

                </div>

                <div className={` max-w-[18rem] ${inputDetails.message === `happy selling 😙` ? "text-green-500" : "text-red-600"}`}>
                        {
                            inputDetails.message
                        }
                </div>
            </div>

            <button className='max-h-12 buttons'>
                Add
            </button>

        </form>

    </section>
  )
}

export default SearchProduct