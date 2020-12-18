const appRoute = require('./app');
const userRoute = require('./users');
const articleRoute = require('./articles');
const collectionRoute = require('./collections');

module.exports = app => {
    app.use('/api/', appRoute);
    app.use('/api/users', userRoute);
    app.use('/api/articles', articleRoute);
    app.use('/api/collections', collectionRoute);
}