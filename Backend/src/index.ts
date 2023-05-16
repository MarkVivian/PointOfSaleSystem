import express, { Application } from "express";
import cors from "cors";
import HandleOrdersProducts from "./Orders-Products/HandleOrdersProducts";
import Database from "./Database/Database";
const App:Application = express()


App.use(cors({
    origin : 'http://localhost:3000',
    methods : ["POST", "GET"],
    allowedHeaders : ["authorization", "content-type"]
}))
App.use(express.json())

App.use("/GetDatabaseInfo", HandleOrdersProducts)

const DB = new Database()
DB.ConnectToDatabase()
.then(()=>{
    const data = DB.ReadDatabase("Orders")
    console.log(data)
})

App.listen(3001, ()=>{
    console.log(`http:localhost://3001 is running.`)
})
