var express = require('express');
var app = express();
var port = 5000;

app.get('/', (request, Response, next) => {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', true);

    // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
    
    Response.send("Hello iam root url");
});

app.listen(port, (err) => {
    if(err){
        return console.log("something bad happened", err);
    }

    console.log(`server is listening at http://localhost:${port}/`);
})