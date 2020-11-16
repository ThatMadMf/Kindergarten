const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

const userScheme = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
},
    {
        timestamps: { createdAt: 'createdAt' }
    }
);

const User = mongoose.model('User', userScheme);

module.exports = User;
