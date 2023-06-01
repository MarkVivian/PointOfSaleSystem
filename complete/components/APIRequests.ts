class APIRequests{
    ClearFromServer(tableName:string){
        return new Promise(async (resolve, reject)=>{
            try{
                const response = await fetch("http://localhost:3000/DatabaseInfo/DeleteTable",{
                    cache : "no-cache",
                    method : 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Set the appropriate Content-Type header
                        // Additional headers if needed
                        // ...
                        },
                    body:JSON.stringify({"name" : tableName})
                })
                const resp = await response.json()
                resolve(resp)
            }catch(err){
                reject(err)
                console.error("an error occured while sending a request to clear the database");
                
            }
        })
    }

    RecieveFromServer(table:string){
        return new Promise(async (resolve, reject)=>{
            try{
                const response = await fetch("http://localhost:3000/DatabaseInfo/GetData", {
                    method : "POST",
                    cache : "no-cache",
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body : JSON.stringify({"Name" : table})
                })
                const resp = await response.json()
                resolve(resp)
            }catch(err){
                reject(err)
                console.error("an error occured while sending a request to recieve to the database.");
                
            }
        })
    }

    WriteToServer(tableName:string, Columns : string[], data : any[]){
        return new Promise(async (resolve, reject)=>{
            try{
                const Response = await fetch("http://localhost:3000/DatabaseInfo/AddData",{
                    cache : "no-cache",
                    method : 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Set the appropriate Content-Type header
                        // Additional headers if needed
                        // ...
                        },
                    body:JSON.stringify({
                        "DataToWrite" : data,
                        "Columns" : Columns,
                        "tableName" : tableName
                    })
                })
            const respo = await Response.json()
            resolve(respo)
            }catch(err){
                reject(err)
                console.error("an error occured while sending a request to add to the database");
                
            }
        })
    }

    UpdateInServer(table : string, Columns : string[], Id : number, idColumn : string, UpdatedValues : any[]){
        return new Promise(async (resolve, reject)=>{
            try{
                const Response = await fetch("http://localhost:3000/DatabaseInfo/UpdateData", {
                    method : "POST",
                    cache : "no-cache",
                    body : JSON.stringify({
                        "tableName" : table,
                        "id" : Id,
                        "idColumn" : idColumn,
                        "columns" : Columns,
                        "UpdatedData" : UpdatedValues
                    }),
                    headers : {
                      'Content-Type': 'application/json',
                    }
                })
              const ResponseGotten = await Response.text()
              resolve(ResponseGotten)
            }catch(err){
                reject(err)
                console.error("an error occured while sending a request to update the database");
                
            }
        })
    }

    DeleteInServer(tableName : string, idColumnName : string, columnId : number){
        return new Promise(async (resolve, reject)=>{
            try{
                const response = await fetch("http://localhost:3000/DatabaseInfo/DeleteData", {
                    cache : "no-cache",
                    method : "POST",
                    body : JSON.stringify({
                        "tableName" : tableName,
                        "idColumnName" : idColumnName,
                        "columnId" : columnId
                    }),
                    headers: {
                      'Content-Type': 'application/json', // Set the appropriate Content-Type header
                    },
                  })
                const resp = await response.json()
                resolve(resp)
            }catch(err){
                reject(err)
                console.log("an error occured while sending a request to delete info from database")
            }
        })
    }
}

const ApiRequests = new APIRequests()
export default ApiRequests
