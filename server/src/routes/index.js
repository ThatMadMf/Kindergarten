const appRoute = require('./app');
const userRoute = require('./users');

module.exports = app => {
    app.use('/', appRoute);
    app.use('/users', userRoute);
}