import { Metadata } from 'next'
import ShopInfo from './Shop'


export const metadata:Metadata ={
    title : "Shop",
    description : "this is where you can sell your goods"
}

function Shop() {
  return (
    <main>

      <ShopInfo />
      
    </main>
  )
}

export default Shop