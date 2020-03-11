const listOfStocks= [
  "msft"
];


module.exports =
class cache{
static price = new Map()
  constructor(){
    cache.getStocks()
    console.log(cache.price)
  }
  static getPrice(key) {
   return cache.price.get(key)
  }
   static getStocks() {
    listOfStocks.forEach(element => {
      cache.getBasicData(element)
    });
  }
  static getURL(url, fun){
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': url,
      'headers': {
      }
    };
    request(options, fun);
    
  }
  static getBasicData(sym){
    let url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+ sym+"&apikey=OEDIUG71L5DJ2JHS"
    let fun = function (error, response){
      console.log(response.body)
      let json = JSON.parse(response.body)["Global Quote"]
      let priceMain = json["05. price"]
      cache.price.set(sym,priceMain)
      console.log(priceMain)
      console.log(this.price)
    }
    cache.getURL(url, fun)
    console.log()
  
  }
}

