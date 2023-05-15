import { createConnection } from "mysql2";

export default class Database{
    connection:any;
    rows!:string;

    ConnectToDatabase(){
        try{
            this.connection = createConnection({
                host : "127.0.0.1",
                user : "mark",
                password : "M6a2r7k5",
                database : "TestPOS"
            })

            this.connection.connect((err : Error) => {
                if (err) {
                  console.error('Error connecting to MySQL database:', err);
                  return;
                }
                console.log('Connected to MySQL database');
              });

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