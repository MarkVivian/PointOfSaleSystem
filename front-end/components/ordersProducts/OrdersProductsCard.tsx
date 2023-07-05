import React from 'react'
import { orderInterface, productInterface } from '../Interfaces'
import Image from 'next/image'

function OrdersProductsCard({dataToWrite, showImage, type} : {type : string, dataToWrite : orderInterface[] | productInterface[], showImage : Boolean}) {
  
  return (
    <section className=' h-97 bg-green-600 mb-3 mx-5 p-2 flex flex-wrap'>
        {
          type === "orders" ?
            (dataToWrite as orderInterface[]).map((file:orderInterface)=>{
              return(
                <div key={file.orderId} className='bg-blue-700 w-fit p-2 rounded-lg h-fit'>
                  <div>
                    <h1>Ordered Item</h1>
                    <div></div>
                  </div> 
                  <div>
                    <h1>No of items ordered</h1>
                    <div></div>
                  </div> 
                  <div>
                    <h1>date of Order</h1>
                    <div></div>
                  </div> 
                  <div>
                    <h1>arrival date</h1>
                    <div></div>
                  </div> 
                </div>
              )
            })
            :
            (dataToWrite as productInterface[]).map((file:productInterface)=>{
              return(
                <div key={file.productId} className='bg-blue-700 w-fit p-2 rounded-lg h-fit'>
                  {
                    showImage ?
                      <Image src={""} alt='random image' width={100} height={100}/>
                    :
                      ""
                  }
                  <div>
                     <div>
                      <h1>Product Name</h1>
                      <div></div>
                      </div> 
                     <div>
                      <h1>Product Description</h1>
                      <div></div>
                      </div>
                     <div>
                      <h1>Number of Items</h1>
                      <div></div>
                    </div>
                    <div>
                      <h1>Cost per item</h1>
                      <div></div>
                    </div>
                  </div>
                </div>
              )
            })
        }
    </section>
  )
}

export default OrdersProductsCard