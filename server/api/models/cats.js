const mongoose = require('mongoose')

const catsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  createdAd: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  }
})

module.exports = mongoose.model('Cats', catsSchema)