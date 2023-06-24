import Image from 'next/image'
import { valueStateInterface } from './Interfaces'

const FeatureCards = ({name, link, image, description}:valueStateInterface) => {
  return (
    <div className='bg-blue-800 w-60 relative'>
        <Image src={image} alt={name} height={1000} width={1000} priority={true} className='w-screen h-40'/>
        <div className='p-1 text-center'>
          <h1 className=' text-xl w-full text-center font-bold'>
            {name}
          </h1>
          <p>
            {description}
          </p>
        </div>
    </div>
  )
}

export default FeatureCards