const { Schema, model } = require('mongoose');

const smallBoxSchema = new Schema({
    quantity: 4,
    price: 
    // Int placeholder
    3,
    donuts: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Donut',
        }],
        validate: [amount, 'Must have 4 donuts in this box.']
    }   
});

// Need to confirm 
function amount(donut) {
    return donut.length = 4
};

const SmallBox = model('SmallBox', smallBoxSchema);

module.exports = SmallBox;