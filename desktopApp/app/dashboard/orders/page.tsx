import {Metadata} from 'next'
import Orders from './Orders'

export const metadata:Metadata ={
  title : "Orders",
  description : "this is where you can add, delete and update your Orders..."
}

function page() {
  return <Orders />
}

export default page