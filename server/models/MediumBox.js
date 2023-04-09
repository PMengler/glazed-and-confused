const { Schema, model } = require('mongoose');

const mediumBoxSchema = new Schema({
    quantity: 6,
    price: 
    // Int placeholder,
    9,
    donuts: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Donut',
        }],
        validate: [amount, 'Must have 6 donuts in this box.']
    } 
});

// Need to confirm 
function amount(donut) {
    return donut.length = 6
};

const MediumBox = model('MediumBox', mediumBoxSchema);

module.exports = MediumBox;