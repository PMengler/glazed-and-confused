const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
    {
        totalPrice: {
            // Use of aggretates?
        },
        boxes: {
            type: Schema.Types.ObjectId,
            ref: 'Boxes'
        },
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
    .get(function() {
        return this.boxes.totalPrice;
    });
    
const Order = model('Order', orderSchema);

module.exports = Order;