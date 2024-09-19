const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const authorRoutes = require('./routes/authorRoutes');
const errorHandler = require('./middleware/errorHandler');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const book = require('./models/book');

const app = express();

app.use(cors());

app.use(express.json());

// routes

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);


// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

app.get('/api/books', async (req, res, next) => {
    try {
        const books = await book.findAll();  
        res.json(books);  
    } catch (error) {
        console.error('Erreur lors de la récupération des livres :', error);
        next.status(500).json({ message: 'Erreur serveur' });
    }
});


