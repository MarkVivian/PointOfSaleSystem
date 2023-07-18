"use client"
import { searchProductsName } from '@/components/ImportedValues'
import React, { useEffect, useState } from 'react'

function SearchProduct() {

    const [inputDetails, setInputDetails] = useState<{ProductName : string,totalCost : number, count : number, cost : number, message : string}>({
        ProductName : "",
        count : 0,
        cost : 0,
        totalCost : 0,
        message : ""
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

  useEffect(()=>{
    const item = searchProductsName.find((obj) => obj.productName === inputDetails.ProductName)
    console.log(item)
    if(item && item.productCount < inputDetails.count){
        setInputDetails((file)=>{
            return{
                ...file,
                message : `😞 the item ${item.productName} is of count ${item.productCount}... either reduce the count or update the product list...`,
                totalCost : inputDetails.cost * inputDetails.count
            }
        })
    }else{
        setInputDetails((file)=>{
            return{
                ...file,
                totalCost : inputDetails.cost * inputDetails.count,
                message : `enjoy your day ... 😙`
            }
        })
    }
  }, [inputDetails])

  return (
    <section className='pSearch border-4 h-fit p-2'>
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

               <div className=' border-2 max-h-28 overflow-y-scroll mt-2'>
                {
                        inputDetails.ProductName ?
                    searchProductsName.map((file)=>{
                        return(
                            <div key={file.productName} className='gap-10 flex cursor-pointer m-1' onClick={()=>{
                                setInputDetails((content)=>{
                                    return{
                                        ...content,
                                        ProductName : file.productName,
                                        cost : file.productCost
                                    }
                                })
                            }}>
                                <h1>ProductName : {file.productName}</h1>
                                <h1>productCost : {file.productCost}</h1>
                            </div>
                        )
                    })
                    :
                    ""
                }
               </div>

            </div>

            <div>
                Count : 
                <input 
                    type='number'
                    name='count'
                    className='mx-1 text-black'
                    onChange={Typed}
                    value={inputDetails.count}
                />

                <div>
                    {
                        inputDetails.message
                    }
                </div>
            </div>

            <button className='bg-white'>
                Add
            </button>

        </form>

    </section>
  )
}

export default SearchProduct