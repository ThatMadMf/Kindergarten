const userService = require('../services/users');

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
    userService.createUser(req.body.username, req.body.password);
    res.status(201).send();
}

module.exports = {
    getUsers,
    register,
};