const appRoute = require('./app');
const userRoute = require('./users');
const articleRoute = require('./articles')

module.exports = app => {
    app.use('/api/', appRoute);
    app.use('/api/users', userRoute);
    app.use('/api/articles', articleRoute);
}