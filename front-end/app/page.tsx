import FeatureCards from "@/components/FeatureCards";
import { valuesState } from "@/components/ImportedValues";

export default function Home() {
  return (
    <body className="grid relative h-screen w-screen">
      <nav className=" h-fit">
        <h1 className="pos text-center">
        Point Of Sale System
        </h1>
      </nav>

      <div className="bg-green-800 h-80 flex gap-10 py-5 w-screen">
        {
          valuesState.map(({name, link, description, image})=>{
            return(
              <FeatureCards key={name} name={name} description={description} image={image} link={link} />
              )
          })
        }
      </div>

      <div className="bg-red-800 relative grid place-content-center h-20">
          <button className=" w-fit bg-white h-fit">
              start Your journey
          </button>
      </div>

      <footer className="bg-black text-white">
    copyrights
      </footer>

    </body>
  )
}
