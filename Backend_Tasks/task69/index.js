const http=require('http');

const server=http.createServer(function(req,res){
    switch(req.url){
        case'/':
            res.end('Welcome to the home page');
            break;
        case'/about':
            res.end('Welcome to the about page');
            break;
        case'/contact':
            res.end('Welcome to the contact page');
            break;
        default:
            res.end('404 Not Found');
    }
    
});

server.listen(7000,function(){
    console.log('Server is running on port 7000');
})