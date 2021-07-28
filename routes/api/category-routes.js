const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// router.get('/', (req, res) => {
//   // find all categories
//   // be sure to include its associated Products
//   try {
//     const categories = await Category.findAll({ 
//       attributes: ['id', 'category_name'],
//       include: [{ model: Product,
//         attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
//       }]
//     });
//     res.status(200).json(categories);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', (req, res) => {
//   // find one category by its `id` value
//   // be sure to include its associated Products
//   try {
//     const oneCategory = await Category.findByPk(req.params.id, {
//       attributes: ['id', 'category_name'],
//       include: [{ model: Product,
//         attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
//       }]
//     });
//     if (!oneCategory) {
//       res.status(404).json({ message: 'No category found with that id!' });
//       return;
//     }
//     res.status(200).json(readerData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// create a new category
router.post('/', (req, res) => {
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
// router.put('/:id', (req, res) => {

//   try {
    
//   } catch (err) {
    
//   }
// });

// Deleting Category by its id
router.delete('/:id', (req, res) => {
  try {
    const deletegCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!deleteCategory){
      return res.status(404).json({ message: 'There is no category with that id!'});
    }
    res.json(deletegCategory);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;

