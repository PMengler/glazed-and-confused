const { Schema, model } = require('mongoose');

// const boxSchema = new Schema(
//     {
//         allBoxes: [
//             // List of all sm, md, lg boxes
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: 'SmallBox',
//             },
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: 'MediumBox',
//             },
//             {
//                 type: Schema.Types.ObjectId,
//                 ref: 'LargeBox',
//             },
//         ],
//     },
//     {
//         toJSON: {
//             virtuals: true,
//         },
//         id: false,
//     },
// );


// boxSchema
//     .virtual('totalPrice')
//     .get(function() {
//         // Mapping function over all this.allBoxes price for total price
//     });
    
// const Boxes = model('Boxes', boxSchema);

// module.exports = Boxes;

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