const crypto = require('crypto');
const uuid = require('uuid');
const User = require('../db/shemes/user');

const secret = process.env.HASHSECRET || 'secret';

const createUser = (username, password) => {
    return new User({
        username: username,
        password: crypto.createHash('md5', secret).update(password).digest('hex'),
    }).save();
}

const getUsers = () => {
    return User.find();
}

const findByLoginData = (username, password) => {
    return User.findOne({ username, password: crypto.createHash('md5', secret).update(password).digest('hex') });
}

module.exports = {
    createUser,
    getUsers,
    findByLoginData,
}