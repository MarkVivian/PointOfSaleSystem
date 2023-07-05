"use client"
import { useRef, useState } from 'react'
import { addInfointerface, topFeatureShowControl } from '../Interfaces'
import DialogInput from './DialogInput'

function TopFeature({type} : {type : string}) {
  const [showControl, setControl] = useState<topFeatureShowControl>({
    locateState : false,
    locateText : "",
    delete : false,
    modify : false,
    clearState : false
  })

  const [addInfo, setAddInfo] = useState<addInfointerface>({
    orderItem : "",
    orderCount : 0,
    orderDate : "",
    arrivalDate : "",
    productName : "",
    productDescription : "",
    productCount : 0,
    productCost : 0,
    productImage : ""
  })

  const dialogReference = useRef<HTMLDialogElement>(null)
  const buttonReference = useRef<HTMLButtonElement>(null)

  function onChangeModifier(events : React.ChangeEvent<HTMLInputElement>){
    const {name, value} = events.target
      setAddInfo((files)=>{
        return{
          ...files,
          [name] : value
        }
      })
  }
  return (
    <section className='w-full p-2 grid place-content-center'>
      
      <div className='flex m-2 gap-10'>
        <button 
          className=' border-2 bg-gray-500 px-5 py-1 rounded-lg hover:font-bold hover:text-lg duration-150'
          onClick={()=>{
            if(dialogReference.current){
              dialogReference.current.showModal()
            }
          }}>
            Add
        </button>
        
        <button 
          className=' border-2 bg-gray-500 px-5 py-1 rounded-lg hover:font-bold hover:text-lg duration-150' 
          onClick={()=>{setControl((files)=>{return{...files, locateState : !showControl.locateState}})}}
        >
          Locate
        </button>
        <button 
          className=' border-2 bg-gray-500 px-5 py-1 rounded-lg hover:font-bold hover:text-lg duration-150'
          onClick={()=>{setControl((files)=>{return{...files, modify : !showControl.modify}})}}
        >Modify</button>
        <button 
          className=' border-2 bg-gray-500 px-5 py-1 rounded-lg hover:font-bold hover:text-lg duration-150'
          onClick={()=>{setControl((files)=>{return{...files, delete : !showControl.delete}})}}
        >Delete</button>
      </div>

      {
        showControl.locateState ?
          <div className=' grid place-content-center p-3'>
          <input 
            type="text" 
            placeholder='locate tab' 
            name = "locateText"
            value={showControl.locateText}
            onChange={(events)=>{
                setControl((files)=>{
                  return{
                    ...files,
                    locateText : events.target.value
                  }
                })
            }}
            className='text-black h-10 p-1 text-lg rounded-lg' />
          </div>
          : 
          ""
      }

        <DialogInput 
        buttonReference={buttonReference} 
        dialogReference={dialogReference} 
        changeModifierFunction={onChangeModifier}
        type={type}
        addinfo={addInfo}/>

    </section>
  )
}

export default TopFeature