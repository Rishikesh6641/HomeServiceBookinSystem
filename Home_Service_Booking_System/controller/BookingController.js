import { createConnectionObj } from "../config/DbConfig.js";

const conncetion=createConnectionObj();

export function createUser(request,response){
    var data=request.body;
    const insertQry=`INSERT INTO cust(Cname,service,ccity,cstate,Bdate,Btime) VALUES('${data.name}','${data.service}','${data.city}','${data.state}','${data.date}','${data.time}')`;
    conncetion.query(insertQry,(error)=>{
        try{
            if(error){
                response.status(500).send({message:"Somethinf wrong... (if)",error});
            }else{
                response.status(200).send({message:"Inserted data sucessfully..."});
            }
        }catch(error){
            response.status(500).send({message:"Something Wrong...catch"});
        }
    });
    // console.log(data);
    // response.status(200).send();
}

export function getUsers(request,response){
    const selectQry=`SELECT * FROM cust`;
    conncetion.query(selectQry,(error,result)=>{
        try{
            if(error){
                response.status(500).send(error);
            }else{
                response.status(200).send(result);
            }
        }catch(error){
            response.status(500).send(error);
        }
    });
}

export function updateUser(request,response){
    var data=request.body;

    const updateQry=`UPDATE cust set Bdate='${data.date}',Btime='${data.time}',service='${data.service}' WHERE id=${data.id}`;
    conncetion.query(updateQry,(error,result)=>{
        try{
            if(error){
                response.status(500).send({message:"Something went wrong"});  
            }else{
                response.status(200).send({message:"Updated successfully...",result});
            }
        }catch(erro){
            response.status(500).send(error);
        }
    });
}

export function deleteOrder(request,response){
    var data=request.params.id;
    var id=parseInt(data);
    const deleteQry=`DELETE FROM cust WHERE id=${id}`;
    conncetion.query(deleteQry,(error,result)=>{
        try{
            if(error){
                response.status(500).send({message:"Something went wrong",error});
            }else{
                response.status(200).send({message:"Deleted",result});
            }

        }catch(error){
            response.status(500).send({message:"Something went wrong",error});
        }
    });
}