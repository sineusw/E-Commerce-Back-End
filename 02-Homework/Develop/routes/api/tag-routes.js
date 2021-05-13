const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  try{
    const tags = await Tag.findAll({include: Product}).toJSON();
    res.send(tags)
    } catch(error){
      res.status(500).send(error)
    }
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  try{
    const {id} = req.params
    const singleTag = await Tag.findByPk(id, {include: Product}).toJSON();
    res.send(singleTag)
    } catch(error){
      res.status(404).send(error);
    }
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  const body = req.body
  try{
    const tag = await Tag.create(body);
    res.status(201).json("tag created")
  } catch(error){
    res.status(500).send(error)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(() => res.status(204).send("Tag updated successfully"))
  .catch(error => res.status(500).send(error))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const {id} = req.params
  const singleTag = await Tag.findByPk(id);
  try {
    await singleTag.destroy();
    res.status(200).send("Deleted successfully")
  }catch(error){
    res.status(404).send(error)
  }
});

module.exports = router;
