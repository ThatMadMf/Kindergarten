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
        .then(async (user) => {
            const temp = await generateAuthorizedUser(user.username, req.body.password)
            res.status(201).send(temp);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).send(err);
        })
}

const login = async (req, res, next) => {
    const authorizeUser = await generateAuthorizedUser(req.body.username, req.body.password);

    if (authorizeUser) {
        return res.status(200).send(authorizeUser);
    }
}

const getData = async (req, res, next) => {
    const {_id, username, firstName, lastName, createdAt} = await userService.getUser(req.user.username);
    return res.status(200).send({_id, username, firstName, lastName, createdAt});
}

const update = async (req, res, next) => {
    await userService.updateUser(req.body);
    const {_id, username, firstName, lastName, createdAt} = await userService.getUser(req.user.username);
    return res.status(200).send({_id, username, firstName, lastName, createdAt});
}

const generateAuthorizedUser = async (username, password) => {
    const user = await userService.findByLoginData(username, password);
    if (user === null) {
        return null;
    } else {
        const accessToken = jwt.sign({ username: user.username }, secret);
        return {id: user._doc._id, username: user._doc.username, token: accessToken};
    }
}

module.exports = {
    getUsers,
    register,
    login,
    getData,
    update,
};