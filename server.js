// SERVERS -

const http = require('http');
 const servers = http.createServer((request,response) => {
    console.log('Request Raised');
 });
 server.listen(3000,'localhost',() => {
    console.log('Listening on port 3000');
 });


 const http = require('http');
const server = http.createServer((req,res) => {
    console.log('Request Raised123');
 res.write('<p> Hello Harshitha </p>');
 res.end();
});
server.listen(3000,'localhost',() => {
    console.log('Listening on port 3000 har');
 });