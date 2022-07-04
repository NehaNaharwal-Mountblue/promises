const axios = require('axios');

async function doGetRequest() {

  let res = await axios.get('https://jsonplaceholder.typicode.com/todos');

  let data = res.data;
  console.log(data);
}

doGetRequest();