const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/kindergarten', { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', () => {
  console.log('connection error')
})
db.once('open', function () {
  console.log('we\'re connected!')
})

module.exports = db