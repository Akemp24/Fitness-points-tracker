// import required modules
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// import typeDefs and resolvers

// import connection
const db = require('./config/connection');

// import middleware

// define port number where express server will listen
const PORT = process.env.PORT || 3001;
// creates express application instance that can be used to define routes and middleware
const app = express();

// create a new apollo server instance with type defs and resolvers
const server = new ApolloServer({
    // call typeDefs and resolvers and context
});

// configures middleware to handle URL-encoded data in HTTP requests
app.use(express.urlencoded({ extended: false}));
// configures middleware to handle JSON data
app.use(express.json());

// conditional block to check if app is running in production environment
// if so then it serves static files
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

// defines route that serves the index.html file of the react frontend application
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// create new instance of apollo server with graphql schema
const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(`Use graphql at http://localhost:${PORT}${server.graphqlPath}`)
        });
    });
};

// Call the async function to start the server
startApolloServer();