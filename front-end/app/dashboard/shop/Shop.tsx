"use client"
import React from 'react'
import SearchProduct from './SearchProduct'
import ProductList from './ProductList'
import ProductClear from './ProductClear'

function Shop() {
  return (
    <main className='shop p-3'>
      <SearchProduct />

      <ProductList />

      <ProductClear />
      
    </main>
  )
}

export default Shop