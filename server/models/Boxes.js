const { Schema, model } = require('mongoose');

const boxSchema = new Schema(
    {
        boxes: [{
            // List of all sm, md, lg boxes
        }],
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
    
const Box = model('Box', boxSchema);

module.exports = Box;