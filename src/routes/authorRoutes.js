const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

router.get('/', authorController.getAllAuthors);
router.post('/', authorController.createAuthor);
router.patch('/:id', authorController.updateAuthor);
router.delete('/:id', authorController.deleteAuthor);
router.get('/:id', authorController.getAuthorById);

module.exports = router;