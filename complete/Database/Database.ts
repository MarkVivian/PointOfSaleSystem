import { createConnection } from "mysql2";

export default class Database{
    connection:any;
    rows!:string;

    ConnectToDatabase(){
        try{
            this.connection = createConnection({
                host : "localhost",
                user : "mark",
                password : "M6a2r7k5",
                database : "TestPOSsystem"
            })
    
            if(this.connection.ping()){
                console.log("the connection is valid")
            }else{
                console.log("fuck")
            }
        }catch(err){
            console.log("an error occured while connecting to the database.")
        }

    }

    WriteToDatabase(){

    }

    ReadDatabase(){

    }

    ReadSpecificDatabase(){

    }
}