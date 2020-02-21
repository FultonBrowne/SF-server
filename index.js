
var http = require("http");
var express = require('express');

var getStocks = require("./api/getStocks")
var app = express();
new getStocks(app)

 

 // Console will print the message
 app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

