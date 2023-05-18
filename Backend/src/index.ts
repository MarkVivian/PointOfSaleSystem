import express, { Application } from "express";
import cors from "cors";
import HandleOrdersProducts from "./Orders-Products/HandleOrdersProducts";
const App:Application = express()


App.use(cors())

App.use(express.json())

App.use("/DatabaseInfo", HandleOrdersProducts)


App.listen(3000, ()=>{
    console.log(`http:localhost://3000 is running.`)
})
