const crypto = require('crypto');
const uuid = require('uuid');
const User = require('../db/shemes/user');

const secret = process.env.HASHSECRET || 'secret';

const createUser = (username, password) => {
    new User({
        id: uuid.v4(),
        username: username,
        password: crypto.createHash('md5', secret).update(password).digest('hex'),
    }).save()
        .then((user) => {
            return user;
        })
        .catch((err) => {
            console.log(err);
        })
}

const getUsers = () => {
    return User.find();
}

module.exports = {
    createUser: createUser,
    getUsers: getUsers,
}