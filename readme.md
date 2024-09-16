# Introduction

dans ce cours nous allons apprendre a concevoir un back office en utilisant une architecture API REST avec node.js , Epress, Mysql et sequelize.
nous allon construire un mini projet de gestion de bibliotheque pour illustrer les concept clé.

# Projet : System de gestion de bibliotheque

notre system permetra de :

* gerer les livre (ajouter, mettre a jour, lister, supprimmer)
* gerer les auteur (ajouter, mettre a jour, lister, supprimmer)
* associer le live a des auteur

# configuration de l'environement de travail

## instalation des dependance

dans le terminal vous allez entrer les commandes :

```
npm init -y
npm install express mysql2 sequelize dotenv
npm install
```

## structure du projet

```
BookAPI/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── index.js
│   │   ├── book.js
│   │   └── author.js
│   ├── controllers/
│   │   ├── bookController.js
│   │   └── authorController.js
│   ├── routes/
│   │   ├── bookRoutes.js
│   │   └── authorRoutes.js
│   ├── middleware/
│   │   └── errorHandler.js
│   └── app.js
├── .env
└── package.json
```
