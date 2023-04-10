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

  input ContainItemInput {
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

  type Box {
    _id: ID
    quantity: Int
    price: Int
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
    boxes: [SmallBox]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    donuts: [Donut]
    donut(name: String!): Donut
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBox(quantity: Int!, price: Int!, donuts: [DonutInput]): Box
    addOrder(boxes: [ID]!): Order
  }
`;
module.exports = typeDefs;
