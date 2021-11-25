//Calling request library
const request = require("request");

//Using the command line

// eslint-disable-next-line no-undef
const args = process.argv;
const params = args.slice(2);
const breedName = params[0];

// console.log(breedName);

const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  //If all fine
  if (response && response.statusCode === 200) {
    const data = JSON.parse(body); //Converts string to JSON format

    if (data[0] !== undefined && data[0] !== "") {
      //I data is undefined, this means the breed does not exist
      console.log("body: " + data[0].description);
      console.log("body type: " + typeof data);
    } else {
      console.log("No such breed found!");
    }
  } else {
    //If the url is wrong, we get this error
    console.log("error:", error);
  }
});
