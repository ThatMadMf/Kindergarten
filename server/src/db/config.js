const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/kindergarten', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', () => {
  console.error('connection error')
  process.exit(1);
})
db.once('open', function () {
  console.log('we\'re connected!')
})

module.exports = db