const fs = require('fs');
const axios = require('axios');

function cat(path, out){
    fs.readFile(path,'utf8',(err,data) =>{
        if(err){
            console.log('Invalid path name: ' + path);
        }
        else{
            if(out){
                write(out,data)
            }
            else{
                console.log(data)
            }
        }
    })
}
async function webCat(path,out){
    axios.get(path)
    .then(response=>{
        if(out){
            write(out,response.data)
        }
        else{
            console.log(response.data)
        }
    })
    .catch(err=>console.log(err))

}
function write(out,data){
    fs.writeFile(out,data,'utf8',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('success:',data)
        }
    })
}



let path = process.argv[2]
let out =''
if (path ==='--out'){
    out = process.argv[3]
    path = process.argv[4]

}
if(path.includes('http') || path.includes('www.')){
    webCat(path,out)
}
else{
    cat(path,out)
}