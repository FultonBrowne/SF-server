
var http = require("http");
var express = require('express');
var getStocks = require("./api/getStocks")
var stocksCache = require("./api/stockCache")
var app = express();
new stocksCache()
let cache = new getStocks(app)
 // Console will print the message
 app.listen(8080, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

