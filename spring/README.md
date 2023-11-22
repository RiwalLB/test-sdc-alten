# Description

API 'product' réalisée en Java avec le framework Springboot dans le cadre du test technique pour le SDC d'Alten

# Précisions

- La définition de la base est réalisée en "code first"
- J'ai pris le parti de transformer "inventory status" et "category" en tables de référence car les valeurs semblent récurrentes
- Le seeding de la base est réalisé au démarrage de l'application. Cela a pour effet de remettre à la base à zéro

# Améliorations potentielles

- Tests unitaires et d'intégration
- Il y aura un problème d'autoincrément des identifiants lorsqu'ils atteindront ceux du seed (1000)
  - Cela se règle en modifiant l'autoincrément avec la requête suivante

```sql
SELECT setval('"Product_id_seq"', COALESCE((SELECT MAX(id)+1 FROM "Product"), 1), false);
```

- Validation groups pour ne pas copier-coller le code entre les DTO de création et d'update
- Utiliser lombok pour éviter le boilerplate (il y a débat sur la question)
- Ajout d'un soft delete (booléen ou date de suppression en base) pour pouvoir récupérer les données supprimées (bonne pratique)
- Les prix devraient être en centimes pour éviter les problèmes d'arrondis des flottants
- Gestion d'erreur plus complète
- Documentation plus fournie
- Les propriétés de l'application de de spring peuvent être affinées

# Prérequis

- Java SDK/openSDK 21 et Springboot v3.1.5 doivent être installés sur votre machine

# Lancement de l'application

Lancer docker-compose puis l'application comme suit

```bash
# Docker
docker-compose up -d

# Application
./gradlew bootRun
```

# Postman

- Importer la collection `Product_API.postman_collection.json` à la racine de ce dépôt dans Postman
- Ajouter la variable `host` avec la valeur `localhost:8080`
