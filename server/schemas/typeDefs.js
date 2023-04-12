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

  type Box {
    _id: ID
    donuts: [Donut]
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
    boxes: [Box]
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
    boxes: [Box]
    orders: [Order]
    order(_id: ID!): Order
    checkout(boxes: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addBox(donuts: [ID]): Box
    addDonutToBox(donut: ID!, box: ID!): Box
    newOrder(boxes: [ID]!): Order
    addBoxToOrder(boxes: [ID]!): Order
  }
`;
module.exports = typeDefs;
