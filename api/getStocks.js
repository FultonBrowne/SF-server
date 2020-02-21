module.exports = 
function getStocks(){
    var express = require('express');
    var express_graphql = require('express-graphql');
    var { buildSchema } = require('graphql');
    // GraphQL schema
    var schema = buildSchema(`
    type Query {
    stocksym(sym:String): Stock
    },
    type Stock {
        name: String
        price: Int
        priceHistoryHourly: [Int]
        priceHistoryDaily: [Int]
        priceHistoryWeekly: [Int]
        priceHistoryMonthly: [Int]
    }

    `);// Root resolver
    
    var data = {
        name : "test",
        price : 20,
        priceHistoryDaily : [20, 20, 20],
        priceHistoryHourly : [10, 12, 20],
        priceHistoryWeekly: [30, 12, 80],
        priceHistoryMonthly:[1000, 90, 34]
    }
    var root = {
        Stock: () => data
        };
    var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

}