import { homePageValues } from '@/components/ImportedValues'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <body className="homepage">
      
      <h1 className="text-center">
      Point Of Sale System
      </h1>

      <main className="mainBody">
          {
            homePageValues.map(({name, link, description, image})=>{
              return(
                <Link className="linkDetails" key={link} href={link} passHref>
                      <Image src={image!} alt={name} height={1000} width={1000} priority={true} className='imageDetails'/>
                      <div>
                        <h1>
                          {name}
                        </h1>
                        <p>
                          {description}
                        </p>
                      </div>
                  </Link>
                )
            })
          }
      </main>

    </body>
  )
}
