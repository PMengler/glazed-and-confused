const db = require('../config/connection');
const {
  //   ContainItem,
  Donut,
    // SmallBox,
  //   MediumBox,
  //   LargeBox,
  Order,
  User,
} = require('../models');

// const ContainItemData = require('./containItemData');
const donutData = require('./donutData.json');
// const smallBoxData = require('./smallBoxData.json');
// const mediumBoxData = require('./mediumBoxData.json');
// const largeBoxData = require('./largeBoxData.json');
const orderData = require('./orderData.json');
const userData = require('./userData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Donut.deleteMany({});
  //   await SmallBox.deleteMany({});
  //   await MediumBox.deleteMany({});
  //   await LargeBox.deleteMany({});
  // await Order.deleteMany({});
  //   await ContainItem.deleteMany({});

  const users = await User.insertMany(userData);
  const donuts = await Donut.insertMany(donutData);
  //   const smallBoxes = await SmallBox.insertMany(smallBoxData);
  //   const mediumBoxes = await MediumBox.insertMany(mediumBoxData);
  //   const largeBoxes = await LargeBox.insertMany(largeBoxData);
  // const orders = await Order.insertMany(orderData);
  //   const containItems = await ContainItem.insertMany(containItemData);

  console.log('Donut Shop has been restocked!');
  process.exit(0);
});
