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
`