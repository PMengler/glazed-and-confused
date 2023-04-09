const { Schema, model } = require('mongoose');

const smallBoxSchema = new Schema({

});

const SmallBox = model('SmallBox', smallBoxSchema);

module.exports = SmallBox;