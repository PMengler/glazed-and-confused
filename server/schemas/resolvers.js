const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Donut, Box, Order } = require('../models');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

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
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate('products');

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/images/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: 'usd',
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $set: args },
          { new: true }
        );
        return user;
      }
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
    addBox: async (parent, args, context) => {
      const box = await Box.create(args);
      return box;
    },
    addDonutToBox: async (parent, { donutId, boxId }) => {
      const donut = await Donut.findById(donutId);
      const box = await Box.findByIdAndUpdate(
        { _id: boxId },
        { $push: { donuts: donut._id } },
        { new: true }
      );
      return box;
    },
    newOrder: async (parent, { boxes }, context) => {
      if (context.user) {
        const order = await Order.create({ boxes });
        return order;
      }
    },
    addBoxToOrder: async (parent, { orderId, boxId }) => {
      const Order = await Order.findByIdAndUpdate(orderId, {
        $push: { boxes: boxId },
      });
      return Order;
    },
  },
};

module.exports = resolvers;
