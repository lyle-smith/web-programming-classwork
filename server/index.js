const express = require('express')
const app = express()

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Happy New Year!');
})

app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});


const nnn = function(paranName) {
  
} // this keyword is complicated

const obj = {
  vvv() {
    
  }
} // this keyword is complicated

const fatArrow = x => x * 2;  // this keyword refers to the parent scope
