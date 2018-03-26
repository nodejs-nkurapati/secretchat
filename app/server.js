var express = require('express');
var http = require('http');

var app = express();
var server = http.Server(app);

app.get('/', (req, res)=> {
    res.send("<h1>Coming soon...</h1>");
})

server.listen(80, ()=>{
    console.log('Server Started...');
})
