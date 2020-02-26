const listOfStocks= [
  "msft"
];
module.exports =
    function getStocks() {

      var map = new Map();
      listOfStocks.forEach(element => {
        getURL("https://google.com/index.html")
      });
}


      
function getURL(url){
  var toReturn
  var http = require('http');

  var options = {
    url : url
  };
  
  var req = http.get(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
  
    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    res.on('data', function(chunk) {
      // You can process streamed parts here...
      bodyChunks.push(chunk);
    }).on('end', function() {
      var body = Buffer.concat(bodyChunks);
      console.log('BODY: ' + body);
      toReturn = body
      // ...and/or process the entire body here.
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
  return toReturn
}
