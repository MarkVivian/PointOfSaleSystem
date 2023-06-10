"use client"
import React, { useRef } from 'react'
import GetItemFromString from './GetItemFromString';

function DueDate({ArrivalDate, Count, Product, type}:{ArrivalDate : string, Count : number, Product:string, type:string}) {
    const showDiv = useRef<HTMLDivElement>(null)
    
    function ExpiredData():{expiration:boolean, dateNow : string}{
        var expire = false;
        var expired = false;
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
        const day = String(currentDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        if(formattedDate === ArrivalDate){
            expire = true
        }else if(Number(GetItemFromString(formattedDate, 2)) > Number(GetItemFromString(formattedDate, 2))){
            
        }
        return{
            expiration : expire,
            dateNow : ` ${Product} is about to go overdue ... `
        }
    }


    function GetCount():{Message : string, states:boolean}{
        var none = Count == 0 ? true : false;
        var low = Count > 0 && Count <= 5 ? true : false;
        return{
            Message : none ? `the number of ${Product} is 0. Please Order More or delete item...` : `The number of ${Product} is getting low. the current count is ${Count}`,
            states : none ? none : low
        }
    }

  return (
    <div ref={showDiv} className='absolute bg-white left-0 w-[20rem] text-center grid rounded-md top-0 text-black'>
    {
        GetCount().states ?
            GetCount().Message
            :
            ""
    }
    {
        ExpiredData().expiration ?
           ExpiredData().dateNow 
            :
            ""
    }
    {
        GetCount().states || ExpiredData().expiration ?
            <>
            <button className='p-1 border-2 m-1 border-black hover:text-lg rounded-md' onClick={()=>{
                if(showDiv.current){
                    const cl = showDiv.current.classList
                    cl.add("hidden")
                }
            }}>
                Close
            </button>
            </>
            :
            ""
    }
    </div>
  )
}

export default DueDate