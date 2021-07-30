const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
router.get('/', async(req, res) => {
try {
  const allTags = await Tag.findAll({
    include:[Product],
  });
  res.status(200).json(allTags);
} catch (err) {
  res.status(500).json(err);
}
});

// Find tag by primary key
router.get('/:id', async(req, res) => {
  try {
    
  } catch (err) {
    
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    
  } catch (err) {
    
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
try {
  
} catch (err) {
  
}
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
try {
  
} catch (err) {
  
}
});

module.exports = router;
