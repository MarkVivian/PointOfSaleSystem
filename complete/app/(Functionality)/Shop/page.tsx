import Shop from "./Shop"

export interface ProductsInterface{
  ProductId : number
  ProductName : string,
  ProductCount : number,
  ProductCost : number,
  Editstate? : boolean
}

interface StaticInterface{
  id : number,
  StaticItem : string,
  StaticCount : number,
  StaticPrice : number
}

const Shoping = async () => {
  const Products:ProductsInterface|any = await GetData("Products")
  const Static = await GetStatic()
  return (
    <>
      <Shop Products={Products} staticInfo={Static}/>
    </>
  )
}

export default Shoping

async function GetData(table:string){
  return new Promise(async (resolve, reject)=>{
    try{  
      const info = await fetch("http://localhost:3000/DatabaseInfo/GetData", {
        method : "POST",
        cache : "no-cache",
        headers: {
          'Content-Type': 'application/json', // Set the appropriate Content-Type header
          // Additional headers if needed
          // ...
        },
        body: JSON.stringify({"Name" : table})
      })
      const response = await info.json()
      resolve(response)
    }catch(err){
      console.error("an error occured while getting the data")
      reject(err)
    }
  })
 
}

async function GetStatic():Promise<StaticInterface[]>{
  return new Promise(async (resolve, reject)=>{
      try{
          const response = await fetch("http://localhost:3000/DatabaseInfo/GetData", {
              cache : "no-cache",
              method : "POST",
              headers: {
                  'Content-Type': 'application/json', // Set the appropriate Content-Type header
                  // Additional headers if needed
                  // ...
                },
                body: JSON.stringify({"Name" : "Static"})
          })
          const res:StaticInterface[] = await response.json()
          resolve(res)
      }catch(err){
          reject(err)
          console.log("an error occured while loading the data")
      }
  })
}
