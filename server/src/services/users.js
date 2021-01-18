const crypto = require('crypto');
const User = require('../db/shemes/user');

const secret = process.env.HASHSECRET || 'secret';

const createUser = (username, password) => {
    return new User({
        username: username,
        password: crypto.createHash('md5', secret).update(password).digest('hex'),
    }).save();
};

const getUsers = () => {
    return User.find();
};

const getAdmin = () => {
    return User.find({username: 'admin'});
};

const findByLoginData = (username, password) => {
    return User.findOne({
            username,
            password: crypto.createHash('md5', secret).update(password).digest('hex')
        }
    );
};

const updateUser = (user) => {
    return User.findOneAndUpdate({username: user.username}, {...user});
};

const getUser = (username) => {
    return User.findOne({username: username});
}

module.exports = {
    createUser,
    getUsers,
    findByLoginData,
    getAdmin,
    updateUser,
    getUser,
}