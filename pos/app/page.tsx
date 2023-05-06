import DivElement from "@/components/HomePage/DivElement";
import delivery from "@/public/delivery.jpg";
import product from "@/public/Products.jpg";
import analitics from "@/public/statistics.jpg";
import Background from "@/public/BackgroundImage.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className=' body-setter h-[100vh] w-[100hw] relative'>
      <Image src={Background} alt="background image" className=" absolute z-[-1] w-[100%] h-[100%] filter blur-sm bg-white opacity-70"/>
      <div className=" w-[100vw] text-center p-2">
          <h1 className=" text-[32px]">Enterprise Name goes Here</h1>
          <h2 className=" text-[28px]">Point Of Sale System</h2>
      </div>
      <div className="flex h- place-items-center justify-center p-10">
        
        <div className="container overflow-scroll md:h-[40rem] md:w-[50rem] p-10 md:gap-8 flex md:overflow-hidden flex-wrap place-items-center justify-center">
            <DivElement title="Products" image={product}/>
            <DivElement title="Orders" image={delivery}/>
            <DivElement title="Analytics" image={analitics}/>
            <DivElement title="Not Yet decided" image={delivery}/>
        </div>
        
      </div>
      
      <footer className=" p-4 absolute bottom-10 left-0 text-center w-full">
      Copyright © 2023 Mark Industries. All rights reserved.
      </footer>
      
    </div>
  )
}
