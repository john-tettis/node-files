const fs = require('fs');
const axios = require('axios');

function cat(path){
    fs.readFile(path,'utf8',(err,data) =>{
        if(err){
            console.log('Invalid path name: ' + path);
        }
        else{
            console.log(data)
        }
    })
}
async function webCat(path){
    axios.get(path)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))

}



let path = process.argv[2]
if(path.includes('http') || path.includes('www.')){
    webCat(path)
}
else{
    cat(path)
}