const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({ 
      attributes: ['id', 'category_name'],
      include: [{ model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCategory = await Category.findByPk(req.params.id, {
      
    });
    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post('/', (req, res) => {
//   // create a new category
//   try {
    
//   } catch (err) {
    
//   }
// });

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
//   try {
    
//   } catch (err) {
    
//   }
// });

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
//   try {
    
//   } catch (err) {
    
//   }
// });

module.exports = router;

