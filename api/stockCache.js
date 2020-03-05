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
function getURL(url, fun){
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': url,
    'headers': {
    }
  };
  request(options, fun);
  
}
function getBasicData(sym){
  let url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+ sym+"&apikey=OEDIUG71L5DJ2JHS"
  let fun = function (error, response){
    console.log(response.body)
    let json = JSON.parse(response.body)["Global Quote"]
    console.log(json)
  }
  getURL(url, fun)
  console.log()

}
