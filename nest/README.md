<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Description

API 'product' réalisée en Node.js dans le cadre du test technique pour le SDC d'Alten

# Précisions

-   J'ai pris le parti de transformer "inventory status" et "category" en tables de référence car les valeurs semblent récurrentes
-   Le code est contraint en unicité
-   Le prix stocké en centimes pour éviter les problèmes d'arrondis des floats (transparent pour le client)
-   Le seeding de la base est réalisé au démarrage de l'application. Cela a pour effet de remettre à la base à zéro

# Améliorations potentielles

-   Tests unitaires et d'intégration
-   Il y aura un problème d'autoincrément des identifiants lorsqu'ils atteindront ceux du seed (1000)
-   Cela se règle en modifiant l'autoincrément avec la requête suivante

```sql
SELECT setval('"Product_id_seq"', COALESCE((SELECT MAX(id)+1 FROM "Product"), 1), false);
```

-   Ajout d'un soft delete (booléen ou date de suppression en base) pour pouvoir récupérer les données supprimées (bonne pratique)
-   Gestion d'erreur plus complète
-   Documentation plus fournie

# Prérequis

node, npm et pnpm doivent être installés sur votre machine

```bash
# Installation de pnpm
npm install -g pnpm
```

# Lancement de l'application

Lancer le script d'installation

```bash
./script/installation.sh
```

La documentation OpenAPI (Swagger) de l'API est disponible à l'adresse suivante après démarrage de l'application

> http://localhost:3000/api

# Postman

-   Importer la collection `Product_API.postman_collection.json` à la racine de ce dépôt dans Postman
-   Ajouter la variable `host` avec la valeur `localhost:3100`
