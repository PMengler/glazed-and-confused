const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
    {
        // boxes: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'Boxes'
        // },

        boxes: [
            // List of all sm, md, lg boxes
            {
                type: Schema.Types.ObjectId,
                ref: 'SmallBox',
            },
            {
                type: Schema.Types.ObjectId,
                ref: 'MediumBox',
            },
            {
                type: Schema.Types.ObjectId,
                ref: 'LargeBox',
            },
        ],
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
    .get(function () {
        // Still need to loop over all items in boxes array
        return this.boxes.price;
    });

const Order = model('Order', orderSchema);

module.exports = Order;