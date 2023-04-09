const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
    {
        boxes: {
            type: Schema.Types.ObjectId,
            ref: 'Boxes'
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        id: false,
    },
);


orderSchema
    .virtual('orderTotal')
    .get(function() {
        return this.boxes.totalPrice;
    });

const Order = model('Order', orderSchema);

module.exports = Order;