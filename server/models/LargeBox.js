const { Schema, model } = require('mongoose');

const largeBoxSchema = new Schema({
    quantity: 12,
    price: 
    // Int placeholder
    15,
    donuts: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Donut',
        }],
        validate: [amount, 'Must have 12 donuts in this box.']
    }   
});

// Need to confirm 
function amount(donut) {
    return donut.length = 12
};

const LargeBox = model('LargeBox', largeBoxSchema);

module.exports = LargeBox;