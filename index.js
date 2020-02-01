
var http = require("http");
var stocksClass = require("./models/stocks")
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    let url = request.url
    let array =new Array()
    array.push(new stocksClass("hrfdh", "", "", ""))
    let data = new Buffer(array)
    if(url.startsWith("/stocks")) response.end(data.toJSON.toString
        
        
        
        
        
        )
    
    // Send the response body as "Hello World"
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');