const fs=require('fs');
// create asycronaous file.
fs.writeFile('read.txt','hello dhiraj bhai',(err)=>{
    console.log(err)
});
//add data in previous text.
fs.appendFile('read.txt',' my name is tiwari :)',(err)=>{
    console.log(err)
})
//find data on terminals.
fs.readFile('read.txt',"utf-8",(err,data)=>{
    console.log(data);
})
