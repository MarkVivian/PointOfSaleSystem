"use client"
import { useEffect, useRef, useState } from 'react'
import { addInfointerface, stateManagementInterface, topFeatureShowControl } from '../Interfaces'
import DialogInput from './DialogInput'

function TopFeature({type, HandleStates} : {type : string, HandleStates(values: {modifyState: boolean, deleteState: boolean}): void}) {
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
    productImage : null
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

  function fileAddingModifier(event: React.ChangeEvent<HTMLInputElement>){
    const file = event.target.files?.[0] || null
    console.log(file)
    setAddInfo((files)=>{
      return{
        ...files,
        productImage: file
      }
    })
  }

  useEffect(()=>{
    HandleStates({modifyState : showControl.modify, deleteState : showControl.delete})
  }, [showControl.delete, showControl.modify])

  return (
    <section className='w-full p-2 grid place-content-center topFeature'>
      
      <div className='buttonPlace'>
        <button 
        className='buttons'
          onClick={()=>{
            if(dialogReference.current){
              dialogReference.current.showModal()
            }
          }}>
            Add
        </button>
        
        <button 
        className='buttons'
          onClick={()=>{setControl((files)=>{return{...files, locateState : !showControl.locateState}})}}
        >
          Locate
        </button>
        <button 
        className='buttons'
          onClick={()=>{setControl((file)=>{return{...file, modify : !showControl.modify}})}}
        >Modify</button>
        <button 
        className='buttons'
          onClick={()=>{setControl((file)=>{return{...file, delete : !showControl.delete}})}}
        >Delete</button>
      </div>

      {
        showControl.locateState ?
          <div className=' grid place-content-center'>
          <input 
            type="text" 
            placeholder='locate tab' 
            className='locateTab'
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
          />
          </div>
          : 
          ""
      }

        <DialogInput 
        buttonReference={buttonReference} 
        dialogReference={dialogReference} 
        changeModifierFunction={onChangeModifier}
        type={type}
        addinfo={addInfo}
        fileAddingModifier={fileAddingModifier}/>

    </section>
  )
}

export default TopFeature