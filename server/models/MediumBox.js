const { Schema, model } = require('mongoose');

const mediumBoxSchema = new Schema({

});

const MediumBox = model('MediumBox', mediumBoxSchema);

module.exports = MediumBox;