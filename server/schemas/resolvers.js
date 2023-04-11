const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Donut, Box, Order } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { username }) => {
      return User.findOne({ username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
    },
    donuts: async () => {
      return Donut.find({});
    },
    donut: async (parent, { donutId }) => {
      return Donut.findOne({ _id: donutId });
    },
    boxes: async () => {
      return Box.find({});
    },
    orders: async () => {
      return Order.find({});
    },
    order: async (parent, { orderId }) => {
      return Order.findOne({ _id: orderId });
    },
    checkout: async (parent, args, context) => {},
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
