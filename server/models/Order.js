const { Schema, model } = require('mongoose');

const orderSchema = new Schema({

});

const Order = model('Order', orderSchema);

module.exports = Order;