const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    totalPrice: {
        // Use of aggretates?
    },
    boxes: {
        type: Schema.Types.ObjectId,
        ref: 'Boxes'
    },
});

const Order = model('Order', orderSchema);

module.exports = Order;