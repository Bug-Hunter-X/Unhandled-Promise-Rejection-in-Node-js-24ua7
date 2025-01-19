const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received');
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Unhandled promise rejection
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong'));
  }, 2000);
});

promise.catch(error => {
  console.error('Error:', error);
});

//Error not being handled properly