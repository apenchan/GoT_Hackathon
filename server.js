var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;


//MIDDLEWARE
app.use(express.static('public'));
app.use(express.static("node_modules"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(port);
console.log('===========================');
console.log('Server is running off: ' + port);
console.log('============================');