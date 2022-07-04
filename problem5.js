const fs = require('fs');
const fetch = require('node-fetch');
const { resolve } = require('path');


const sayHelloWorld = () => {
    return new Promise((res, rej)=>{
        res();
        window.setTimeout(() => {
            console.log('Hello World')
        }, 1000);

    
    });
}

(function executeSayHelloWorld () {
    await sayHelloWorld();
    console.log('Hey');
})()