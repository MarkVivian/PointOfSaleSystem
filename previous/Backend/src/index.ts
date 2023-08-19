import express, { Application } from "express";
import cors from "cors";
import HandleOrdersProducts from "./Orders-Products/HandleOrdersProducts";
const App:Application = express()

App.use(cors())

App.use(express.json())

App.use("/DatabaseInfo", HandleOrdersProducts)

const port = 3000;

function StartServer(){
    App.listen(port, ()=>{
        console.log(`http:localhost://${port} is running.`)
    })
}

function StopServer(){
    const currentDate = new Date()
    if(currentDate.getDate() <= 10){
        StartServer()
    }
}

StopServer()
