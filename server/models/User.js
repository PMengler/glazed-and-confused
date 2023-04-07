const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match email format.']
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    donuts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Donut',
        },
    ],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.pass, saltRounds);
    }

    next();
})

const User = model('User', userSchema);

module.exports = User;