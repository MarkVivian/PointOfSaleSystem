import React from 'react'
import { orderInterface, productInterface } from '../Interfaces'
import Image from 'next/image'

function OrdersProductsCard({dataToWrite, showImage, type, modifyState, deleteState} : {type : string, dataToWrite : orderInterface[] | productInterface[], showImage? : Boolean, modifyState : Boolean, deleteState : Boolean}) {
  
  return (
    <section className='card'>
        {
          type === "orders" ?
            (dataToWrite as orderInterface[]).map((file:orderInterface)=>{
              return(
                <div key={file.orderId} className='orderCard'>
                  <div>
                    <h1>Ordered Item</h1>:
                    <h2>{file.orderItem}</h2>

                  </div> 
                  <div>
                    <h1>No of items</h1>:
                    <h2>{file.orderCount}</h2>

                  </div> 
                  <div>
                    <h1>date of Order</h1>:
                    <h2>{file.orderDate}</h2>

                  </div> 
                  <div>
                    <h1>arrival date</h1>:
                    <h2>{file.arrivalDate}</h2>

                  </div> 
                    <div className='executable'>
                      {modifyState ? 
                        <>
                            <button>
                              Done
                            </button>
                            <button>
                              Edit Information
                            </button>
                        </>
                        :
                        ""
                      }
                      {
                        deleteState ?
                        <button>
                          Delete
                        </button>
                        :
                        ""
                      }
                    </div>
                </div>
              )
            })
            :
            (dataToWrite as productInterface[]).map((file:productInterface)=>{
              return(
                <div key={file.productId} className='productCard'>
                  {
                    showImage! ?
                      <Image src={""} alt='random image' width={100} height={100}/>
                    :
                      ""
                  }
                    <div>
                    <h1>Product Name</h1>:
                    <h2>{file.productName}</h2>

                    </div> 
                    <div>
                    <h1>Description</h1>:
                    <h2>{file.productDescription}</h2>

                    </div>
                    <div>
                    <h1>No of Items</h1>:
                    <h2>{file.productCount}</h2>

                  </div>
                  <div>
                    <h1>Cost per item</h1>:
                    <h2>{file.productCost}</h2>

                  </div>
                  
                  <div className='executable'>
                    {modifyState ? 
                      <>
                          <button>
                            Done
                          </button>
                          <button>
                            Edit Information
                          </button>
                      </>
                      :
                      ""
                    }
                    {
                        deleteState ?
                        <button>
                          Delete
                        </button>
                        :
                        ""
                      }
                  </div>

                </div>
              )
            })
        }

    </section>
  )
}

export default OrdersProductsCard