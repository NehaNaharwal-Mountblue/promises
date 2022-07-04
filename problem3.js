const fs = require('fs');
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.json())
.then((data)=>{
    let userIds = data.reduce((acc, eachElement)=>{
        if(eachElement.name.includes("Nicholas"))
        {
            acc[eachElement["id"]] = true;
        }

        return acc;
    },{})
console.log(userIds)
    
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {

       function getToDos (){
         return data.filter((eachElement) => {
            if(!userIds[eachElement['id']]){
                return false;
            }
            else {
                return true;
            }
            
        })   
       } 

        console.log(getToDos());
    })
})
