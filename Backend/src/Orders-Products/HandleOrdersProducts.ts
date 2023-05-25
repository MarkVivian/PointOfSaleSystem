import Express from "express"
import Database from "../Database/Database"
import RemoveQuotes from "../RandomFunctions/Removequotes"

const HandleOrdersProducts = Express.Router()

HandleOrdersProducts.post("/GetData", (req, res)=>{
    const Info:{Name : string} = req.body
    const tableName = RemoveQuotes(Info.Name)
    return new Promise(async (resolve, reject)=>{
        try{
            const DB = new Database()
            await DB.ConnectToDatabase()
            const Data = await DB.ReadDatabase(tableName)
            res.status(200).send(Data)
            resolve(Data)
        }catch(Err){
            reject(Err)
            res.status(200).send("unable to read from the database")
        }
    })
})

HandleOrdersProducts.post("/AddData", (req, res)=>{
    interface bodyInteface{
        DataToWrite : string[],
        Columns : string[],
        tableName : string
    }
    const Info:bodyInteface = req.body
    return new Promise(async (resolve, reject)=>{
        try{
            const DB = new Database()
            await DB.ConnectToDatabase()
            await DB.WriteToDatabase(Info.DataToWrite, Info.Columns, Info.tableName)
            res.status(200).send("Successfully added the data to the database.")
        }catch(err){
            reject(err)
            res.status(200).send("unable to write to the database")
        }
    })
})

HandleOrdersProducts.post("/DeleteData", (req, res)=>{
    interface infoInterface{
        tableName : string,
        columnId : number,
        columnName : string
    }
    const info:infoInterface = req.body
    return new Promise(async (resolve, reject)=>{
        try{
            const DB = new Database()
            await DB.ConnectToDatabase()
            await DB.DeleteFromDatabase(info.tableName, info.columnName, info.columnId)
            res.status(200).send("we have recieved the data efficiently")
        }catch(err){
            res.status(200).send("unable to delete the data from the database")
            reject(err)
        }
    })
})

HandleOrdersProducts.post("/UpdateData", (req, res)=>{
    interface DataInterface{
        id:number,
        tableName : string,
        columns : string[],
        UpdatedData : string[],
        idColumn : string
    }

    const Data:DataInterface = req.body
    console.log(Data)
    console.log(`Updated data is ${Data.UpdatedData}`)
    const DB = new Database()
    return new Promise(async (resolve, reject)=>{
        try{
            await DB.ConnectToDatabase()
            await DB.UpdateDataFromDatabase(Data.tableName, Data.id, Data.columns, Data.UpdatedData, Data.idColumn)
            res.status(200).send("the data has been updated succesfully")
        }catch(err){
            reject(err)
            console.log(`an error occured while updating data in the database . \n ${err}`)
        }
    })
})

HandleOrdersProducts.post("/DeleteStaticTable", (req, res)=>{
    const Info:{name : string} = req.body
    return new Promise(async (resolve, reject)=>{
        try{
            const DB = new Database()
            await DB.ConnectToDatabase()
            await DB.DeleteDatabase(Info.name)
            res.status(200).send("succesfully deleted the static database.")
        }catch(err){
            reject(err)
            console.log(`an error occured while deleting the static table`)
        }
    })
})

export default HandleOrdersProducts;