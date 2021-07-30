const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Find all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ 
      include: [Product],
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find categories by primary key
router.get('/:id', async (req, res) => {
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      include: [Product]
    });
    if (!oneCategory) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(oneCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async(req, res) => {
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
  });
  res.json(newCategory);
  } catch (err) {
    res.json(err);
  }
});

// Update a category by its id
router.put('/:id', async(req, res) => {
  try {
    const updatedCategory = await Category.update({
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedCategory){
      return res.status(404).json({ message: 'There is no category with that id!'});
    }
    res.json(updatedCategory);
  } catch (err) {
    res.json(err);
  }
});

// Deleting Category by its id
router.delete('/:id', async(req, res) => {
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteCategory){
      return res.status(404).json({ message: 'There is no category with that id!'});
    }
    res.json(deleteCategory);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;

