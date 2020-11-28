const appRoute = require('./app');
const userRoute = require('./users');

module.exports = app => {
    app.use('/api/', appRoute);
    app.use('/api/users', userRoute);
}