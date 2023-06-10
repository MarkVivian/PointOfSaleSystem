"use client"
import React, { useRef } from 'react'
import GetItemFromString from './GetDatePositions';

function DueDate({ArrivalDate, Count, Product, type}:{ArrivalDate : string, Count : number, Product:string, type:string}) {
    const showDiv = useRef<HTMLDivElement>(null)
    
    function ExpiredData():{expiration:{month : boolean, all : boolean}, message : string}{
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const CurrentDate = `${year}-${month}-${day}`;
        
        const expired = {
            expireDay : Number(GetItemFromString(ArrivalDate, "First")) <= Number(GetItemFromString(CurrentDate, "First")) && 
                        Number(GetItemFromString(ArrivalDate, "Center")) <= Number(GetItemFromString(CurrentDate, "Center")) &&
                        Number(GetItemFromString(ArrivalDate, "Last")) <= Number(GetItemFromString(CurrentDate, "Last")) 
                        ?
                        true : false,
            expiredMonth : Number(GetItemFromString(ArrivalDate, "First")) <= Number(GetItemFromString(CurrentDate, "First")) && 
                            Number(GetItemFromString(ArrivalDate, "Center")) <= Number(GetItemFromString(CurrentDate, "Center"))
                            ?
                            true : false,
            expire :CurrentDate === ArrivalDate ? true : false
        }
        console.log(expired.expireDay || expired.expiredMonth ? `day ${expired.expireDay} month ${expired.expiredMonth} and item ${Product}` : "")
        return{
            message : expired.expireDay  ? `${Product} is overdue. Please contact your deliverer ....` : expired.expiredMonth ? `${Product} is about to go overdue. Please confirm the order ...` : expired.expire ? ` ${Product} is about to go overdue ... ` : '',
            expiration : {month : expired.expiredMonth, all : expired.expire}
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
        ExpiredData().expiration.month || ExpiredData().expiration.all ?
           ExpiredData().message
            :
            ""
    }
    {
        GetCount().states || ExpiredData().expiration.all || ExpiredData().expiration.month ?
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