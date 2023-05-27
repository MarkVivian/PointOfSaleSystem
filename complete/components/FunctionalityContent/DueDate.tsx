"use client"
import React, { useEffect, useRef } from 'react'

function DueDate({ArrivalDate, Count, Product, type}:{ArrivalDate : string, Count : number, Product:string, type:string}) {
    const showDiv = useRef<HTMLDivElement>(null)
    
    function ExpiredData():{expiration:boolean, dateNow : string}{
        var expire = false;
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so we add 1
        const day = String(currentDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        if(formattedDate === ArrivalDate){
            expire = true
        }
        return{
            expiration : expire,
            dateNow : ` ${Product} is about to go overdue ... `
        }
    }


    function GetCount():{Message : string, states:boolean}{
        const Message=`The number of ${Product} is getting low. the current count is ${Count}`;
        var states = false;
        if(Count <= 5){
            states = true;
        }
        return{
            Message : Message,
            states : states
        }
    }


  return (
    <div ref={showDiv} className='absolute bg-white left-0 w-[20rem] text-center grid rounded-md top-0'>
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