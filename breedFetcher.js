const request = require('request');
const args = process.argv.slice(2)
request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response,body) => {
  if (error) {
    console.log("error",error);
    return
  }
 
  const data = JSON.parse(body);
  const breed = data[0] 
  if (!breed) {
    console.log('not found')
    return 
  }

  // console.log(data);
  // console.log(typeof data);
  console.log(breed.description)
})