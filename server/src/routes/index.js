const appRoute = require('./app');

module.exports = app => {
    app.use('/', appRoute);
}