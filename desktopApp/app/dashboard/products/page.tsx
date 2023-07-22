import {Metadata} from 'next'
import Products from './Products'


export const metadata:Metadata ={
  title : "Products",
  description : "this is where you can add, delete and update your products..."
}

function page() {
  return <Products />
}

export default page