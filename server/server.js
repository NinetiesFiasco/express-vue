require('dotenv').config()
require('./database')

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const api = require('./api')

const port = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(api)

app.use(express.static(path.join(__dirname, 'client')))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})