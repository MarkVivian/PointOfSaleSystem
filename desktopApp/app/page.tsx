import HomepageCards from "@/components/HomepageCards";
import { valuesState } from "@/components/ImportedValues";

export default function Home() {
  return (
    <body className="grid relative h-screen w-screen">
      <nav className=" h-fit border-b-4">
        <h1 className="pos text-center">
        Point Of Sale System
        </h1>
      </nav>

      <main className="h-fit relative flex w-screen gap-5 overflow-hidden py-5">
          {
            valuesState.map(({name, link, description, image})=>{
              return(
                <HomepageCards key={name} name={name} description={description} image={image} link={link} />
                )
            })
          }
      </main>

      <footer className="bg-black text-white text-center w-screen p-2 border-t-4 absolute bottom-0">
        copyrights information 
          <br/>
        Adipisicing duis commodo reprehenderit sunt dolore sunt cupidatat consectetur eu cillum mollit ipsum enim proident.
        Aliquip quis ipsum magna ut occaecat veniam.
        <br/>
        Ut ipsum laborum Lorem ullamco.
      </footer>

    </body>
  )
}
