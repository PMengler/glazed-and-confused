const { Schema, model } = require('mongoose');

const largeBoxSchema = new Schema({

});

const LaregeBox = model('LaregeBox', largeBoxSchema);

module.exports = LaregeBox;