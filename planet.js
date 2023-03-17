
const fs = require('fs');
const parse = require('csv-parse');

const results = [];

fs.createReadStream('data/kepler_data.csv')
  .pipe(parse({
      comment: '#',
      columns: true,
    }))
  .on('data', (data) => {
    results.push(data)
  })
  .on('error', (err) => {
    console.log('error :', err);
  })
  .on('end', () => {
    console.log('results', results)
    console.log('no More Data');
  })


