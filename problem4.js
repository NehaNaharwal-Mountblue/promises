const fs = require('fs');
const fetch = require('node-fetch');

const users = [1,2,3]
function promiseAll(users, url) {

    Promise.all(users.map(userid => fetch(`${url} /userid`)))
    .then((res)=>{console.log(res);
    })
    

}


promiseAll(users, 'https://jsonplaceholder.typicode.com/users')



// B

function onlyOneApi(url) {

    fetch(url).then(response => response.json())
    .then((res)=>{
        console.log(res);
    })
    
}

onlyOneApi('https://jsonplaceholder.typicode.com/users')
