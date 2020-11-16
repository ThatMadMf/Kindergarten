const crypto = require('crypto');
const uuid = require('uuid');
const User = require('../db/shemes/user');

const secret = process.env.HASHSECRET || 'secret';

const createUser = (username, password) => {
    return new User({
        id: uuid.v4(),
        username: username,
        password: crypto.createHash('md5', secret).update(password).digest('hex'),
    }).save();
}

const getUsers = () => {
    return User.find();
}

module.exports = {
    createUser,
    getUsers,
}