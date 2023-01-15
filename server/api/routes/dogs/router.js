const express = require('express')
const router = express.Router()
const service = require('./service')

router.post('/', service.create)
router.get('/', service.readAll)
router.get('/:skip/:limit', service.readPage)
router.get('/count', service.count)
router.put('/:id', service.update)
router.delete('/:id', service.delete)

module.exports = router