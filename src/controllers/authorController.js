const { Author } = require('../models');

exports.createAuthor = async (req, res, next) => {
    try {
        const author = await Author.create(req.body);
        res.status(201).json(author);
    } catch (err) {
        next(err);
    }
}

exports.getAllAuthors = async (req, res, next) => {
    try {
        const authors = await Author.findAll();
        res.json(authors);
    } catch (err) {
        next(err);
    }
}


exports.updateAuthor = async (req, res, next) => {
    try{
        const authorId = req.params.id;
        const author = await Author.findByPk(authorId);
        
        if (!author) {
            res.status(404).json({ message: "Autheur non trouvé" });
        }
        await author.update(req.body);
        res.status(200).json({ message: "Autheur modifié avec succès" });
    } catch(err){
        next(err);
    }
}

exports.deleteAuthor = async (req, res, next) => {
    try {
        const authorId = req.params.id;
        const author = await Author.findByPk(authorId);

        if (!author) {
            return res.status(404).json({ message: "Auteur non trouvé" });
        }

        await author.destroy();
        res.status(200).json({ message: "Auteur supprimé avec succès" });
    } catch (err) {
        next(err);
    }
};



exports.getAuthorById = async (req, res, next) => {
    try {
        const authorId = req.params.id;
        const author = await Author.findByPk(authorId);
        if (!author) {
            res.status(404).json({ message: "Auteur non trouvé" });
        }
        res.json(author);
    } catch (err) {
        next(err);
    }
}
