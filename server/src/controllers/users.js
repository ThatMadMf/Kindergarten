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
    userService.createUser(req.body.username, req.body.password)
    .then((user) => {
        console.log(user);
        res.status(201).send({id: user.id, username: user.username});
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    })
}

module.exports = {
    getUsers,
    register,
};