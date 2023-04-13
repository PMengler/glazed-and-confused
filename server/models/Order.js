const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
    {
        boxes: [{
            type: Schema.Types.ObjectId,
            ref: 'Box'
        }],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
);


orderSchema
    .virtual('orderTotal')
    .get(() => {
        const orderTotal = null;

        this.donuts.forEach(donut => {
            orderTotal = orderTotal + donut.price;
        });
        return orderTotal;
    });

const Order = model('Order', orderSchema);

module.exports = Order;