const express = require('express')
const router = express.Router()
const {cats, dogs} = require('./routes')

router.use('/api/cats', cats)
router.use('/api/dogs', dogs)

module.exports = router