module.exports = 
function getStocks(){
    var express = require('express');
    var express_graphql = require('express-graphql');
    var { buildSchema } = require('graphql');
    // GraphQL schema
    var schema = buildSchema(`
    type Query {
    stocksym(id:Int): Stock
    },
    


    `);// Root resolver
    var root = {
    stocksym: () => 'Hello World!'
    };
    var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));






app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

}