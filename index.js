const fs = require("fs"); 

const content = "current timestamp"

fs.writeFile("./current date-time.txt",content,(err)=>{
if(err){
    console.log(err)
}
else{
    console.log("writen sucess")
}


})