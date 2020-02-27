const listOfStocks= [
  "msft"
];
module.exports =
    function getStocks() {

      var map = new Map();
      listOfStocks.forEach(element => {
        getBasicData(element)
      });
}
function getURL(url){
  var toReturn
  var http = require('https');

  var options = {
    url : url
  };
  http.get(url)
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
    })
  });
  
  req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
  });
  return toReturn
}
function getBasicData(sym){
  let url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo"
  let data = getURL(url)
  console.log(data)
  let obj = JSON.parse(data)

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
}
