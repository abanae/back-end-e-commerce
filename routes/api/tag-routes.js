const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', async (req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [Product],
    });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find tag by primary key
router.get('/:id', async (req, res) => {
  try {
    const oneTag = await Tag.findByPk(req.params.id, {
      include: [Product]
    });
    if (!oneTag) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(oneTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_id: req.body.tag_id,
    });
    res.json(newTag);
  } catch (err) {
    res.json(err);
  }
});

// Update a tag by its id
router.put('/:id', async (req, res) => {
  try {

  } catch (err) {

  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {

  } catch (err) {

  }
});

module.exports = router;
