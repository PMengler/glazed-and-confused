const db = require('../config/connection');
const {
  //   ContainItem,
  Donut,
  Order,
  User,
  Box,
} = require('../models');

// const ContainItemData = require('./containItemData');
const donutData = require('./donutData.json');
const boxData = require('./boxData.json');
const orderData = require('./orderData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Donut.deleteMany({});
  await Box.deleteMany({});
  await Order.deleteMany({});
  //   await ContainItem.deleteMany({});

  const users = await User.insertMany(userData);
  const donuts = await Donut.insertMany(donutData);
  const boxes = await Box.insertMany(boxData); 
  const orders = await Order.insertMany(orderData);
  //   const containItems = await ContainItem.insertMany(containItemData);

  console.log('Donut Shop has been restocked!');
  process.exit(0);
});
