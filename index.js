
var http = require("http");
var getStocks = require("./api/getStocks")
var stocksClass = require("./models/stocks")
new getStocks()
 

 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');