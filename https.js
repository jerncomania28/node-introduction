const https = require('https');

const request = https.request('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log('Data Chunk', chunk.toString('utf8'));// toString() converts Buffer Data to 'utf8'-english format
  })
  res.on('end', () => {
    console.log("Data read successfully!!");
  })
})

request.end();