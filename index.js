
const http = require('http');

const handlerServer = (req,res)=>{
    res.writeHead(200,{'Content-type': 'text/html'});
    res.write('<h1>HOla mundo </h1>');
    res.end();}

http.createServer(handlerServer).listen(3434);
