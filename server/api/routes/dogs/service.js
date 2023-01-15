const Dogs = require('../../models/dogs')

const create = async (req, res) => {
  const dog = await Dogs.create({
    name: req.body.name,
    age: req.body.age
  })
  res.json(dog)
}

const readAll = async (req, res) => {
  const dogs = await Dogs.find()
  res.json(dogs)
}

const readPage = async (req, res) => {
  const limit = parseInt(req.params.limit)
  const skip = limit * parseInt(req.params.skip)
  const dogs = await Dogs.find().limit(limit).skip(skip)
  res.json(dogs)
}

const update = async (req, res) => {
  const dog = await Dogs.findById(req.params.id)
  dog.name = req.body.name
  dog.age = req.body.age
  await dog.save()
  res.json(dog)
}

const _delete = async (req, res) => {
  await Dogs.deleteOne({_id: req.params.id})
  res.send({ok: 'ok'})
}

const count = async (req, res) => {
  const count = await Dogs.count()
  res.json(count)
}

module.exports = {create, readAll, update, delete: _delete, count, readPage}
