const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middleware/auth');

router.get('/', bookController.getAllBooks);
router.post('/', authMiddleware, bookController.createBook);
router.patch('/', bookController.updateBook);
router.delete('/', bookController.deleteBook);

module.exports = router;