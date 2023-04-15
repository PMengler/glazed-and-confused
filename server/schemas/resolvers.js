const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Donut, Order } = require('../models');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    user: async (parent, { ID }) => {
      return User.findOne({ ID });
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
      return Donut.findOne({ donutId });
    },
    orders: async () => {
      return Order.find({});
    },
    order: async (parent, { orderId }) => {
      return Order.findOne({ orderId });
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
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect email');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },
    addDonutToOrder: async (parent, args) => {
      const donut = await Donut.findById(args.donut);
      const order = await Order.findByIdAndUpdate(
        { _id: args.order },
        { $push: { donuts: donut } },
        { new: true }
      );
      return order;
    },
    newOrder: async (parent, args, context) => {
      const order = await Order.create(args);
      return order;
    },
    removeDonutFromOrder: async (parent, args) => {
      const order = await Order.findByIdAndUpdate(
        args.order,
        { $pull: { donuts: args.donut } },
        { new: true }
      );
      return order;
    },
  },
};

module.exports = resolvers;
