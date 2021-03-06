const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Find all tags
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

// Create a new tag
router.post('/', async(req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }

});

// Update a tag by its id
router.put('/:id', async(req, res) => {
  try {
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }

    });
    if (!updateTag[0]) {
      res.status(404).json({ message: 'No Tag with this id!' })
      return;
    }
    res.status(200).json(updateTag);

  } catch (err) {
    res.status(500).json(err);
  }
});

// Deleting tag by its id
router.delete('/:id', async (req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!deleteTag) {
      return res.status(404).json({ message: 'There is no tag with that id!' });
    }
    res.json(deleteTag);
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
