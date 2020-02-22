module.exports = 
function getStocks(app){
    var express_graphql = require('express-graphql');
    var { buildSchema } = require('graphql');
    // GraphQL schema
    // GraphQL schema
var schema = buildSchema(`
type Query {
    course(id: Int!): Course
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
    id: 1,
    sym: 'The Complete Node.js Developer Course',
    price: 0,
    priceToday: 0,
    priceYesterday: 0,
    url: 'https://codingthesmartway.com/courses/nodejs/'
}
]
var getCourse = function(args) { 
var id = args.id;
return coursesData.filter(course => {
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