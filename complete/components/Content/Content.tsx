import React from 'react'
import DivForm from './DivForm'

interface ContentProps {
    type : string
}

const ContentPage:React.FC<ContentProps> = (props) => {
  const info = []
  return (
    <div>
        <DivForm />
        <div>
          Input form goes here.
        </div>
    </div>
  )
}

export default ContentPage