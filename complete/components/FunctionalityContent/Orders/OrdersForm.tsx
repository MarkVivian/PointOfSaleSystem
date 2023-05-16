"use client"

import React, { useEffect, useState } from 'react';
import accept from "@/public/accept.png";
import { Orders, Products } from '@/Database/Database';
import Image from 'next/image';
import deleteButton from "@/public/delete-button.png"
import FilterData from "../FilterData"

const OrdersForm = ({searchTerm, Orders} : {searchTerm : string, Orders : Orders[]}) => {

      const Data = FilterData<Orders>(Orders, searchTerm.toLowerCase(), (Orders)=>Orders.OrderedItem.toLowerCase())
    
      return (
        <div className=' bg-green-400 h-[75vh] overflow-y-scroll mt-5 p-2'>
            {
            Data.map((item)=>{
              return(
                <div className=' bg-blue-500 flex mb-5 h-[3rem] relative py-2 rounded-md pl-3' key={item.OrderId}>
                  <h1>{item.OrderedItem}</h1>
                  <div className=' flex absolute gap-4 right-4'>
                    <button><Image src={accept} alt='accept image' width={30} height={30}/></button>
                    <button><Image src={deleteButton} alt='delete image' width={30} height={30}/></button>
                  </div>
                </div>
                    )
              })
              }
    
        </div>
      )
    }

export default OrdersForm