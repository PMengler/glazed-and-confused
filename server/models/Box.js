const { Schema, model } = require('mongoose');

const boxSchema = new Schema(
    {
        quantity: {
            type: Number,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        donuts: {
            type: Schema.Types.ObjectId,
            ref: 'Donut',
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Box = model('Box', boxSchema);

module.exports = Box;