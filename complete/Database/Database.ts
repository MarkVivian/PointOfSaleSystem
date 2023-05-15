import { PoolConnection } from "mysql2";
import { createConnection } from "mysql2";
import { createPool } from "mysql2";
import Connection from "mysql2/typings/mysql/lib/Connection";
import Pool from "mysql2/typings/mysql/lib/Pool";

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

interface Products{
    ProductId : number
    ProductName : string,
    ProductCount : string,
    ProductCost : string
}

interface Orders{
    OrderId : number,
    OrderedItem : string,
    OrderDate : string, 
    ArrivalDate : string,
    OrderCount : number
}

export default class Database{
    Connection!:Connection;
    rows?:Orders[] | Products[];

    constructor(){
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

    /*WriteToDatabase(DataToWrite : string[], Columns : string[],  table : string){
        this.pool.getConnection((err, connection)=>{
            if(err){
                console.error("an error occured while writting in the database")
            }

            const commasValues = DataToWrite.map(()=>"?").join(",")        
            const queryScript = `INSERT INTO ${table} (${Columns}) VALUES(${commasValues})`;
    
            connection.query(queryScript, DataToWrite, (error, results, fields) => {
                if (error) {
                  console.error('Error executing query:', error);
                } else {
                  console.log('Data successfully written to the table:', results);
                }
        
                connection.release();
              })
        })
            
    }*/

    ReadDatabase(table : string){         
          // Use the connection for database operations
          this.Connection.query(`SELECT * FROM ${table}`, (error, results : Products[] | Orders[], fields) => {
            // Handle the query results
            if (error) {
              console.error('Error executing query:', error);
            }
            this.rows = results;
            // Release the connection back to the pool
          }); 
          console.log(this.rows)
    }

    ReadSpecificDatabase(){

    }
}
