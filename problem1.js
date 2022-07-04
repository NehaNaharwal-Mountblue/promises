const fs = require('fs');
const fetch = require('node-fetch');
const { resolve } = require('path');

//A
const solution = {};
function usePromise(){
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data)=>{
       solution["A"] = data;
    })
}

usePromise();
 


//B
async function fetchTheUrl(){

    const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
}


//C
fetchTheUrl().then((response)=>{

    solution["B"] = response;
    
    let basedOnUserId = response.reduce((acc, eachElement)=>{

        if(acc[eachElement.userId])
        {
            if(eachElement.completed)
            {
                acc[eachElement.userId].push(eachElement)
            }
            else
            {
                acc[eachElement.userId].unshift(eachElement)
            }
        }
        else
        {
            acc[eachElement.userId] = [];

            if(eachElement.completed)
            {
                acc[eachElement.userId].push(eachElement)
            }
            else
            {
                acc[eachElement.userId].unshift(eachElement)
            }
            

        }

        return acc;
    }, []);


    
    solution["C"] = basedOnUserId;



    // D. 

     let completedUncompletedTask = response.reduce((acc, eachElement)=>{

        if(eachElement.completed)
        {
            if(acc["completed"])
            {
                acc["completed"].push(eachElement);
            }
            else
            {
                acc["completed"] = [];
                acc["completed"].push(eachElement)
            }
        }
        else
        {
            if(acc["completed"])
            {
                acc["nonCompleted"].push(eachElement);
            }
            else
            {
                acc["nonCompleted"] = [];
                acc["nonCompleted"].push(eachElement);
            }
        }

        return acc;
    }, []);


    solution["D"] = completedUncompletedTask;
     
 });

 console.log(solution);

