const { Schema, model } = require('mongoose');

const boxSchema = new Schema({
    
});

const Box = model('Box', boxSchema);

module.exports = Box;