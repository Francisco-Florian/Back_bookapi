# Introduction

Dans ce cours, nous allons apprendre à concevoir un back-office en utilisant une architecture API REST avec Node.js, Express, MySQL et Sequelize. Nous allons construire un mini projet de gestion de bibliothèque pour illustrer les concepts clés.

# Projet : Système de gestion de bibliothèque

Notre système permettra de :

* Gérer les livres (ajouter, mettre à jour, lister, supprimer)
* Gérer les auteurs (ajouter, mettre à jour, lister, supprimer)
* Associer les livres à des auteurs

# Configuration de l'environnement de travail

## Installation des dépendances

Dans le terminal, vous allez entrer les commandes suivantes :

```
npm init -y
npm install express mysql2 sequelize dotenv
npm install
```

## Structure du projet

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

# Modèles

## Qu'est-ce qu'un modèle ?

Un modèle, dans le contexte de Sequelize, représente une table dans votre base de données, les types de champs et les relations entre différentes tables. Les modèles permettent d'interagir avec la base de données de manière orientée objet, sans avoir à écrire de requêtes SQL directement.

# Contrôleurs

## Qu'est-ce qu'un contrôleur ?

Un contrôleur est responsable de la logique métier de votre application. Il reçoit les requêtes de l'utilisateur via les routes, interagit avec les modèles pour accéder ou modifier les données, et prépare la réponse à renvoyer. Les contrôleurs agissent comme des intermédiaires entre les routes (qui définissent les points d'entrée de l'API) et les modèles (qui représentent les données).

## Comprendre req, res et next

Dans les fonctions de contrôleur, vous avez accès à trois paramètres importants :

1. `req` (request) :  
    * Objet représentant la requête HTTP entrante.  
    * Contient des informations sur la requête comme les paramètres de l'URL, les en-têtes, le corps de la requête, etc.  
    * Exemple : `req.params`, `req.query`, `req.body`, `req.headers`, etc.

2. `res` (response) :  
    * Objet représentant la réponse HTTP que votre serveur va envoyer.  
    * Fournit des méthodes pour contrôler la réponse (définir le statut, les en-têtes, envoyer des données, etc.).  
    * Exemple : `res.send()`, `res.json()`, `res.status()`, etc.

3. `next` :  
    * Fonction qui passe le contrôle au middleware suivant.  
    * Utilisée pour la gestion des erreurs lorsqu'elle est appelée avec un argument.  
    * Exemple : `next()` (passe au middleware suivant), `next(error)` (passe à un gestionnaire d'erreur).

# Routes

## Qu'est-ce qu'une route ?

Les routes définissent les points d'entrée de votre API. Elles spécifient comment votre application répond à différentes requêtes HTTP (GET, POST, PUT, DELETE) sur un chemin d'URL spécifique. Les routes agissent comme des aiguillages, dirigeant les requêtes vers les contrôleurs appropriés.

# Middleware

## Qu'est-ce qu'un middleware ?

Un middleware est une fonction qui a accès aux objets de requête (`req`), de réponse (`res`) et à la fonction `next()` dans le cycle de requête/réponse de l'application. Les middlewares peuvent :

* Exécuter du code  
* Modifier les objets de requête et de réponse  
* Terminer le cycle de requête/réponse  
* Appeler le prochain middleware dans la pile

Les middlewares sont utilisés pour des tâches telles que la journalisation, la gestion des erreurs, l'authentification, etc.

Exemple de middleware :

```js
const loggerMiddleware = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
};
app.use(loggerMiddleware);
```
