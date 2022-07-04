const fs = require('fs');
const fetch = require('node-fetch');

function readTheFile(path, transformation){
    return new Promise((resolve, reject) => {
        if(!path){
            reject("Missing File")
        }
        else{
            fs.readFile(path, (err, data) => {
                if(err){
                    reject(err);
                }
                else{

            
                }
            })
        }
    })
}

function transformation(){
    
}



