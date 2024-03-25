
// give the res to browser to html
const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res) => {
    console.log('Request Raised123');
 fs.readFile('./assets/index.html',(err,data) => {
    if(err){
        console.log(err);
        res.end();
    }
    else{
        
        res.write(data);
        res.end();
    }
    
 })
});
server.listen(3000,'localhost',() => {
    console.log('Listening on port 3000 har');
 });