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
                user : "mark",
                password : "M6a2r7k5",
                database : "TestPOS"
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
            // Use the connection for database operations
          this.Connection.query(`SELECT * FROM ${table}`, (error, results : Products[] | Orders[], fields) => {
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
}
