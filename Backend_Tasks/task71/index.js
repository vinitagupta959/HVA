const http=require('http');
const fs=require('fs')
const path=require('path');
const { text } = require('stream/consumers');


const server=http.createServer(function(req,res){
    
    if(req.url==='/'){
        const htmlContent=path.join(__dirname,'public','index.html');
        fs.readFile(htmlContent,'utf-8',function(err,data){
            if(err){
                res.writeHead(500,{"content-type":'text/plain'});
                res.end('Server error')

            }else{
                res.writeHead(200, {'content-type':"text/html"});
                res.end(data)
            }
        })
    }else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
      }
    });
    

server.listen(8000,function(){
    console.log('Server is running on port 7000');
})