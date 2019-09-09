import express from 'express';
//instancia del servidor
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './data/schema';
import { resolvers } from './data/resolvers';

const app = express();
//Apollo necesita q se lo pase como parametros
const server = new ApolloServer( {typeDefs, resolvers} )
//se conecta
server.applyMiddleware({ app })

app.listen( {port:4000}, () => console.log(`Èl servidor esta corriendo http://localhost:4000${server.graphqlPath}`) )