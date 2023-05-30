import { Connection, createConnection } from "mysql2";

interface DataProducts{
    name : string,
    count : number,
    cost : number
}

interface DataOrders{
    orderDate : string,
    ArrivalDate : string,
    OrderedItem : string,
    orderCount : number
}

export interface Products{
    ProductId : number
    ProductName : string,
    ProductCount : string,
    ProductCost : string
}

export interface Orders{
    OrderId : number,
    OrderedItem : string,
    OrderDate : string, 
    ArrivalDate : string,
    OrderCount : number
}

export default class Database{
    Connection!:Connection;

    async ConnectToDatabase(){
        try{
            this.Connection = createConnection({
                host : "127.0.0.1",
                user : "user",
                password : "1234",
                database : "PointOfSale",
                port: 3307
               })
        }catch(err){
            console.log("an error occured while connecting to the database.")
        }
    }

    async WriteToDatabase(DataToWrite : string[], Columns : string[],  table : string){
        return new Promise((resolve, reject) => {
            const commasValues = DataToWrite.map(()=>"?").join(",")        
            const queryScript = `INSERT INTO ${table} (${Columns}) VALUES(${commasValues})`
            this.Connection.query(queryScript, DataToWrite, (error) => {
                if (error) {
                reject(error);
                } else{
                console.log("the data has been written correctly");
                }
            });
            
            this.Connection.end()
        });
    }

    async ReadDatabase(table : string):Promise<Products[] | Orders[]>{         
        return new Promise((resolve, reject)=>{
            const queryScript = "SELECT * FROM " + table
            // Use the connection for database operations
          this.Connection.query(queryScript, (error, results : Products[] | Orders[], fields) => {
            // Handle the query results
            if (error) {
              console.error('Error executing query:', error);
              reject(error)
            }else{
              resolve(results)
            }
          })
          this.Connection.end() 
        })
    }

    async DeleteFromDatabase(table:string, columnName : string, columnId : number){
        return new Promise((resolve, reject)=>{
            const queryScript = "DELETE FROM " + table + " WHERE " + columnName + "=" +  columnId;
            console.log(queryScript)
            this.Connection.query(queryScript, (error, results, fields)=>{
                if(error){
                    console.log("Error executing query", error);
                    reject(error)
                }else{
                    resolve(results)
                }
            })
            this.Connection.end()
        })
    }

    async UpdateDataFromDatabase(table:string, tableId:number, Column:string[], UpdatedData:string[], idColumn:string){
        return new Promise((resolve, reject)=>{
            try{
                var Info="";
                for(var i=0; i<Column.length;i++){
                    const ColumnScript = `\n${Column[i]}="${UpdatedData[i]}",`
                    Info += ColumnScript
                }
                Info = Info.slice(0, -1)
                const queryScript = `UPDATE ${table} SET ${Info} WHERE ${idColumn}=${tableId}`
                this.Connection.query(queryScript, (error, results, fields)=>{
                    if(error){
                        console.log("Error executing query", error);
                        reject(error)
                    }else{
                        resolve(results)
                    }
                })
                this.Connection.end()
            }catch(err){
                reject(err)
                console.log(`an error occured while Updating data in the database ${err}`)
            }
        })
    }

    async DeleteDatabase(tableName:string){
        return new Promise((resolve, reject)=>{
            try{
                const queryScript = `DELETE FROM ${tableName}`
                this.Connection.query(queryScript, (error, results, fields)=>{
                    if(error){
                        console.log("Error while executing query", error)
                        reject(error)
                    }else{
                        resolve(results)
                    }
                })
            }catch(err){
                reject(err)
                console.log(`an error occured while reading specific data from the database.${err}`)
            }
        })
    }
}
