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

            resolve(transformation(data));
                }
            })
        }
    })
}

function transformation(data){
   const parsingData = JSON.parse(data);
   return Object.values(data);

}

readTheFile("./file.json", transformation);


