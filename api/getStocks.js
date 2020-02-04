module.exports = 
function getStocks(){
    let stocksClass = require("../models/stocks")
    let array = new Array(new stocksClass(" hello"))
    array.push()
    return JSON.stringify(array)
}