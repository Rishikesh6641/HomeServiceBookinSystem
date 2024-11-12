import mysql from 'mysql'

export function createConnectionObj(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'cdac',
        database:'cdacmumbai'
    });
}

export function establishConnection(){
    const connection=createConnectionObj();
    connection.connect((error)=>{
        if(error){
            console.log("error connecting to db...");
        }else{
            console.log("Connection established");
        }
    });
}

