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
    price: Float!
    image: String!
    containItems: [ContainItem]
  }

  type ContainItem {
    _id: ID
    name: String!
  }

  input ContainItemInput {
    _id: ID
    name: String!
  }

  input DonutInput {
    _id: ID
    name: String!
    description: String
    image: String
    containItems: [ContainItemInput]
  }

  type Order {
    _id: ID
    donuts: [Donut]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    me: User
    donuts: [Donut]
    donut(_id: ID!): Donut
    orders: [Order]
    order(_id: ID!): Order
    checkout(donuts: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addDonutToOrder(donut: ID!, order: ID!): Order
    newOrder(donuts: [ID]!): Order
  }
`;
module.exports = typeDefs;
