import React from 'react';
import accept from "@/public/accept.png";
import Image from 'next/image';
import deleteButton from "@/public/delete-button.png"


const DivForm:React.FC = () => {

  const FakeData = ["Test1", "Test2", "Test3", "Test4", "Test5"]

  return (
    <div className=' bg-green-400 h-[60vh]'>
        {FakeData.map((item)=>{
          return(
            <div className=' bg-blue-500 flex mb-5'>
              <h1>{item}</h1>
                <button><Image src={accept} alt='accept image' width={30} height={30}/></button>
                <button><Image src={deleteButton} alt='delete image' width={30} height={30}/></button>
            </div>
                )
          })}

    </div>
  )
}

export default DivForm