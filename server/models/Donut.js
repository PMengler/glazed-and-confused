const { Schema, model } = require('mongoose');

const donutSchema = new Schema({
    
});

const Donut = model('Donut', donutSchema);

module.exports = Donut;