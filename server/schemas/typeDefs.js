const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        donuts: [Donut]!
    }

    type Donut {
        _id: ID
        // Need to iron out what a donut has
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
    }
`
module.exports = typeDefs;