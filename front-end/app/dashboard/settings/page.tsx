import { Metadata } from 'next'
import Settings from './Settings'

export const metadata:Metadata ={
  title : "Settings",
  description : "this is where you can modify the appearance of the app.."
}

function page() {
  return <Settings />
}

export default page