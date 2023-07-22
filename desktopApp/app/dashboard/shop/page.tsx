import { Metadata } from 'next'
import SearchProduct from './SearchProduct'
import ProductList from './ProductList'
import ProductClear from './ProductClear'

export const metadata:Metadata ={
    title : "Shop",
    description : "this is where you can sell your goods"
}

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