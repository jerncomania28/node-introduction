const http = require('http');

const server = http.createServer();

const PORT_NUMBER = 3000;

const friends = [
  {
    id: 1,
    name: "wahab",
    age : 23,
  },
  {
    id: 2,
    name: "muiz",
    age : 22,
  }
]
// These are the way routes are mapped on a server in Node.
// you can also condition rendering via req.method
// for post request yyou can read the 'data' event on the response and use it in your code
server.on('request', (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({
      id: "1",
      name: "jeremiah",
      age :21,
    }))
  }
  else if (req.method === 'POST' && req.url === '/friends') {
    req.on('data', (data) => {
      console.log('data', data);
      const friend = data.toString();
      friends.push(JSON.parse(friend));
      // Do  not pipe in the callback function it's going to yield a syntax error as It's already processing the data.
      // .pipe() should Be added after it has read and processsed the data , again there's no need for res.end() when using .pipe()
    });
    req.pipe(res); // pipes the request data as  a response for that endpoint
  }
  else if (req.url === '/friends') {
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(friends))    
  } else {
    res.statusCode = 400
    res.setHeader('Content-type', 'text')
    res.end("Error!!!")
 }
})

server.listen(PORT_NUMBER, () => [
  console.log(`listening on port ${PORT_NUMBER}`)
])