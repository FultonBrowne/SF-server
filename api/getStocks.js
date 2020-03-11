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
        courses(topic: String): [Course]
    },
    type Course {
        id: Int
        sym: String
        price: Int
        priceToday: Int
        priceYesterday: Int
        url: String
    }
    `);var coursesData = [
    {
        id: "MSFT",
        sym: 'The Complete Node.js Developer Course',
        price:  stocksCache.price.get("msft"),
        priceToday: 0,
        priceYesterday: 0,
        url: 'https://codingthesmartway.com/courses/nodejs/'
    }
    ]
    var getCourse = function(args) { 
    var id = args.id;
    return coursesData.filter(course => {
        price = stocksCache.price.get("msft")
        console.log(price)
        return course.id == id;
    })[0];
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