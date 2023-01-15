const Cats = require('../../models/cats')

const create = async (req, res) => {
  try {
    const cat = await Cats.create({
      name: req.body.name,
      age: req.body.age
    })
    res.json(cat)
  } catch (e) {
    res.error(e)
  }
}

const readAll = async (req, res) => {
  const cats = await Cats.find()
  res.json(cats)
}

const readPage = async (req, res) => {
  const limit = parseInt(req.params.limit)
  const skip = limit * parseInt(req.params.skip)
  const cats = await Cats.find().limit(limit).skip(skip)
  res.json(cats)
}

const update = async (req, res) => {
  const cat = await Cats.findById(req.params.id)
  cat.name = req.body.name
  cat.age = req.body.age
  await cat.save()
  res.json(cat)
}

const _delete = async (req, res) => {
  await Cats.deleteOne({_id: req.params.id})
  res.send({ok: 'ok'})
}

const count = async (req, res) => {
  const count = await Cats.count()
  res.json(count)
}

module.exports = {create, readAll, update, delete: _delete, count, readPage}
