const { Schema, model } = require('mongoose');

const boxSchema = new Schema(
    {
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
                ref: 'Large Box',
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


boxSchema
    .virtual('totalPrice')
    .get(function() {
        // Mapping function over all this.boxes price for total price
    });
    
const Boxes = model('Boxes', boxSchema);

module.exports = Boxes;