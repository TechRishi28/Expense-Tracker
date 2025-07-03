// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080
 
// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World231!');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express')
const app = express()
const port = 3000

// app.get or app.post or app.delete or app.put
app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact me!')
})

app.get('/about', (req, res) => {
  res.send('About Us!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:slug/:name', (req, res) => {
  // logic to fetch {slug} from the database
  res.send(`Hello ${req.params.slug} and ${req.params.name}!`)
})

// app.get('/blog/into-to-js', (req, res) => {
//   // logic to fetch intro to js from the database
//   res.send('Hello intro-to-js!')
// })

// app.get('/blog/into-to-python', (req, res) => {
//   // logic to fetch intro to python from the database
//   res.send('Hello intro-to-python!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})