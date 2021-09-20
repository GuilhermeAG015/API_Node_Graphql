const { ApolloServer, gql } = require('apollo-server')

const users = [
    {
        name: 'Guilherme',
        active: true
    },
    {
        name: 'Alexandre',
        active: false
    }
]

const typeDefs = gql `
    type User {
        name: 'string'!
        active: boolean!
        email?: 'string'
    }
`


const server = new ApolloServer({ typeDefs, resolvers})