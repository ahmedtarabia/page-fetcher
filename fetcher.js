// takes in URL 
// take a local file path
const fs = require('fs');
const request = require('request'); //
//import the URL into here
let url = process.argv[2]
let localPath = process.argv[3]
let content = ''
request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`)
  })
});



