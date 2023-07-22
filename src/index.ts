import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import { execute, subscribe } from 'graphql'
import http from "http"
import typeDefs from './schema'
import resolvers from './resolvers/studentResolver'
import {connect} from './database/db.config'

const app = express();

const server = new ApolloServer({
    typeDefs, 
    resolvers
});
server .applyMiddleware({app})

const port = process.env.PORT || 9000

connect().then(()=>{
    console.log("database Connected")
    app.listen(port, ()=> {
        console.log(`the server is running at  http://localhost:${port}`)
    })

})

