const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        orders: [Order]
    }

    type Donut {
        _id: ID
        name: String!
        description: String!
        image: String!
        containItems: [ContainItem]
    }

    type ContainItem {
        _id: ID
        name: String!
    }

    type SmallBox {
        _id: ID
        quantity: Int
        price: Int
        donuts: [Donut]
    }

    type MediumBox {
        _id: ID
        quantity: Int
        price: Int
        donuts: [Donut]
    }

    type LargeBox {
        _id: ID
        quantity: Int
        price: Int
        donuts: [Donut]
    }

    // Not sure about this type definition
    type Boxes {
        _id: ID
        allBoxes: [SmallBox, MediumBox, LargeBox]
    }

    type Order {
        _id: ID
        boxes: [Boxes]
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