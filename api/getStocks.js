module.exports = 
function getStocks(app){
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
        price:  price,
        priceToday: 0,
        priceYesterday: 0,
        url: 'https://codingthesmartway.com/courses/nodejs/'
    }
    ]
    var getCourse = function(args) { 
    var id = args.id;
    return coursesData.filter(course => {
        price = stocksCache.price.get("msft")
        return course.id == id;
    })[0];
    }
    var getStocks = function(args) {
    if (args.topic) {
        var topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
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