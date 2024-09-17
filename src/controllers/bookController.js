const { Book, Author } = require('../models');


exports.createBook = async (req, res, next) => {
    try {
        // req.body > get the data from request body (from the form on the frontend)
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        next(err);
    }
}

exports.getAllBooks = async (req, res, next) => {
    try {
        // SELECT * FROM book LEFT JOIN authors ON book.authorId = authors.id;
        const books = await Book.findAll({ include: Author });
        res.json(books);
    } catch (err) {
        next(err);
    }
}

exports.updateBook = async (req, res, next) => {
    try{
        const bookId = req.params.id;
        const book = await Book.findByPk(bookId);
        
        if (!book) {
            res.status(404).json({ message: "Livre non trouvé" });
        }
        await book.update(req.body);
        res.status(200).json({ message: "Livre modifié avec succès" });
    } catch(err){
        next(err);
    }
}

exports.deleteBook = async (req, res, next) => {
    try{
        const bookId = req.params.id;
        const book = await Book.findByPk(bookId);

        if (!book) {
            res.status(404).json({ message: "Livre non trouvé" });
        }
        await book.destroy();
        res.status(200).json({ message: "Livre supprimé avec succès" });
    } catch (err){
        next(err);
    }
}


