const db = require('../config/connection');
const {
  //   ContainItem,
  Donut,
  Order,
  User,
} = require('../models');

// const ContainItemData = require('./containItemData');
const donutData = require('./donutData.json');
const orderData = require('./orderData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Donut.deleteMany({});
  await Order.deleteMany({});
  //   await ContainItem.deleteMany({});

  const users = await User.insertMany(userData);
  const donuts = await Donut.insertMany(donutData);
  const orders = await Order.insertMany(orderData);
  //   const containItems = await ContainItem.insertMany(containItemData);

  console.log('Donut Shop has been restocked!');
  process.exit(0);
});
