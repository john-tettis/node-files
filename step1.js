const fs = require('fs');

function readFile(path){
    fs.readFile(path,'utf8',(err,data) =>{
        if(err){
            console.log('Invalid path name: ' + path);
        }
        else{
            console.log(data)
        }
    })
}



let path = process.argv[2]
readFile(path)
