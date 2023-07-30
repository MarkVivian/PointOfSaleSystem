"use client"
import SearchProduct from './SearchProduct'
import ProductList from './ProductList'
import ProductClear from './ProductClear'
import { useEffect, useState } from 'react'

function ShopInfo() {
    const [cost, setCost] = useState<number>(0)

    function calculateCost(value : number){
        setCost(cost + value)
    }
  return (
    <main className='shop p-3'>

      <SearchProduct />

      <ProductList 
      costAddition={calculateCost}/>

      <ProductClear 
      cost={cost}/>
      
    </main>
  )
}

export default ShopInfo