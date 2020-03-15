module.exports = 
function getStocks(app){
    let asyn = require("async")
    let stocksCache= require("./stockCache")
    var express_graphql = require('express-graphql');
    var { buildSchema } = require('graphql');
    let price= 0 

   
    
    // GraphQL schema
    var schema = buildSchema(`
    type Query {
        course(id: String!): Course
    },
    type Course {
        id: Int
        sym: String
        price: Float
        priceToday: Float
        priceYesterday: Float
    }
    `);
    var getCourse = function(args) { 
        console.log(args)
            return {
                    id: sym,
                    sym: sym,
                    price:stocksCache.getPrice(args["id"]),
                    priceToday: 0,
                    priceYesterday: 0,
                }
    }
   
    var root = {
    course: getCourse,
    courses: getStocks
    };// Create an express server and a GraphQL endpoint
    app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
    }));

}