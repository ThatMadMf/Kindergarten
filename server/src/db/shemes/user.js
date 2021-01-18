const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const userScheme = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: false,
        },
        lastName: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: {createdAt: 'createdAt'}
    }
);

const User = mongoose.model('User', userScheme);

module.exports = User;
