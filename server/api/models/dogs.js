const mongoose = require('mongoose')

const dogsSchema = new mongoose.Schema({
  name: String,
  age: Number,
  createdAd: {
    type: Date,
    immutable: true,
    default: () => Date.now()
  }
})

module.exports = mongoose.model('Dogs', dogsSchema)