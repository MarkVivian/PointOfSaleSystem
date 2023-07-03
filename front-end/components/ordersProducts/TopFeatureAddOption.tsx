"use client"
import React, { useEffect } from 'react'

function TopFeatureAddOption({type, clear, orders, products} : {type : string, clear : Boolean, orders }) {
    useEffect(()=>{
        
    }, [clear])
  return (
    <section>
        {
            type == "orders" ?
            <>

            </>
            :
            <>
            
            </>
        }
    </section>
  )
}

export default TopFeatureAddOption