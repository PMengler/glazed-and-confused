const { Schema, model } = require('mongoose');

const donutSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        require: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        trim: true,
    },
    containItems: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ContainItem',
        }
    ],
});

const Donut = model('Donut', donutSchema);

module.exports = Donut;