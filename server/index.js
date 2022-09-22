const http = require('http'); // require is common js syntax. Returns http object with methods

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Happy New Year!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('Server running at http://' + hostname + ':' + port + '/');
});


const nnn = function(paranName) {
  
} // this keyword is complicated

const obj = {
  vvv() {
    
  }
} // this keyword is complicated

const fatArrow = x => x * 2;  // this keyword refers to the parent scope
