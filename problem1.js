const fs = require('fs');
const fetch = require('node-fetch');
const { resolve } = require('path');

//A

const solution = {};
function usePromise(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => solution["A"] = data)
} 

usePromise();


//C

    

    function groupNonCompleted(response){
        return response.reduce((acc, eachElement)=>{
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
        }, [])
        }

        // D. 
    function completedUncompletedTask(response){ 
        return response.reduce((acc, eachElement)=>{
        if(eachElement['completed']){
            acc.completed.push(eachElement);
        } else{
            acc.nonCompleted.push(eachElement);
        }
        return acc;
    }, {completed : [], nonCompleted : []});
      }

      function writeToJsonFile(result){
        fs.writeFile("file.json", JSON.stringify(result), "utf-8", (err) => {
            if (err)
              console.log(err);
            else {
              console.log("File written successfully\n");
            }
          });

      }


    async function fetchTheUrl(){
        const fetchedData = await fetch("https://jsonplaceholder.typicode.com/todos");
        const response = await fetchedData.json();
        solution["B"] = response;
        solution['C'] = groupNonCompleted(response);
        solution["D"] = completedUncompletedTask(response);
        writeToJsonFile(solution);
    }

    fetchTheUrl();


 

