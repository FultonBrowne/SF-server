module.exports = 
function getStocks(){
    let stocksClass = require("../models/stocks")
    let array = new Array(new stocksClass("microsoft" ,"msft", 1000, -2 ))
    array.push()
    return JSON.stringify(array)
}