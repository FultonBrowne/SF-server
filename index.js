
var express = require('express');
var stocksCache = require("./api/stockCache")
var app = express();
new stocksCache()
 // Console will print the message
 app.listen(8080, () => console.log('Express GraphQL Server Now Running On localhost:8080/graphql'));

