import Image from 'next/image'
import { valueStateInterface } from './Interfaces'
import Link from 'next/link'

const FeatureCards = ({name, link, image, description}:valueStateInterface) => {
  return (
    <Link href={link} className='relative grid border-2 h-72 w-54' passHref>
        <Image src={image} alt={name} height={1000} width={1000} priority={true} className='w-full h-40'/>
        <div className='p-1 text-center z-10 text-white'>
          <h1 className=' text-xl w-full text-center font-bold'>
            {name}
          </h1>
          <p className='p-1 text-left'>
            {description}
          </p>
        </div>
    </Link>
  )
}

export default FeatureCards