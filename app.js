var express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');

var properties = require('./config/properties');
var db = require('./config/database');
const users = require("./services/users");

var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

var app = express();

// call the database connectivity function
db();

app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(function(req, res, next) {
    next();
 });

app.use('/users', users)

app.get('/health', function (req, res) {
    res.json({
        status : "ok"
    })
});

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
});