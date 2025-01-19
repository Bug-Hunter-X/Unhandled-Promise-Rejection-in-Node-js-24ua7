const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received');
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong'));
  }, 2000);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Perform additional cleanup or logging here
});

promise.catch(error => {
  console.error('Error caught:', error); //This will still be called
});