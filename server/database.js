const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

mongoose.connect(
  process.env.MONGO_DB_URL,
  {useNewUrlParser: true},
  () => {console.log('Mongoose connected')},
  e=>console.error(e)
)