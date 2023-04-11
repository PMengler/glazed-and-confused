const { Schema, model } = require('mongoose');

const containItemSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
    }
});

const ContainItem = model('ContainItem', containItemSchema);

module.exports = ContainItem;