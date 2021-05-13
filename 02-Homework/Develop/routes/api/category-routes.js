const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  try{

  const categories = await Category.findAll({include: Product}).toJSON();
  res.send(categories)
  } catch(error){
    res.status(500).send(error)
  }
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try{
  const {id} = req.params
  const singleCategory = await Category.findByPk(id, {include: Product}).toJSON();
  res.send(singleCategory)
  } catch(error){
  res.status(404).send(error);
  }
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  const body = req.body
  try{
    const category = await Category.create(body);
    res.status(201).json("category created")
  } catch(error){
    res.status(500).send(error)
  }
 
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(() => res.status(204).send("Category updated successfully"))
  .catch(error => res.status(500).send(error))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const {id} = req.params
  const singleCategory = await Category.findByPk(id);
  try {
    await singleCategory.destroy();
    res.status(200).send("Deleted successfully")
  }catch(error){
    res.status(404).send(error)
  }
});

module.exports = router;

  