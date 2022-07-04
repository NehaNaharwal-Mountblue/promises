const fs = require('fs');
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=> response.json())
.then((data)=>{

    let userIds = data.reduce((acc, eachElement)=>{

        if(eachElement.name.includes("Nicholas"))
        {
            acc.push(eachElement.id);
        }

        return acc;
    },[])

    
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => { console.log(data)

       function getToDos (){
        data.filter((eachElement)=>{
             if(Number(eachElement.id)==Number(userIds[0]))
            {
                return eachElement;
            }
        })   
       } 

        console.log(getToDos);
    })
})
