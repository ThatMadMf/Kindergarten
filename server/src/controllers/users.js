const userService = require('../services/users');
const jwt = require('jsonwebtoken');

const secret = process.env.ACCESS_TOKEN_SECRET || 'secret';

const getUsers = (req, res, next) => {
    userService.getUsers()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

const register = (req, res, next) => {
    userService.createUser(req.body.username, req.body.password)
        .then((user) => {
            console.log(user);
            res.status(201).send({ id: user.id, username: user.username });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        })
}

const login = (req, res, next) => {
    userService.findByLoginData(req.body.username, req.body.password)
        .then((user) => {
            if (user === null) {
                res.status(400).send();
            } else {
                const accessToken = jwt.sign({ username: user.username }, secret);
                res.status(200).send({id: user._doc._id, username: user._doc.username, token: accessToken});
            }
        })
}

module.exports = {
    getUsers,
    register,
    login,
};