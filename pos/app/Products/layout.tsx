import { Suspense } from "react"
import Loading from "./loading"
import Error from "./error"

export const metadata = {
    title: 'Products page',
    description: 'will contain the products to be used',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>      
       
        <Suspense fallback={<Loading />}>
          {children}
        </Suspense>

      </>
    )
  }