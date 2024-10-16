# TP 3

## Rendu

Le rendu peut se faire soit par un dépôt github (recommandé), soit en le déposant sur l'ide de la 3wa, soit par une archive (mettre votre nom dans l'archive) à envoyer par discord.

## Objectifs

Apprendre à utiliser l'AJAX, envoyer des requêtes HTTP et manipuler les API REST grâce à la réalisation de plusieurs petits projets.

## Organisation

Créer un dossier pour chaque mini-projet avec un fichier *index.html* et *main.js*, pour que ce soit plus facile de s'y retrouver.

## Projets

### Découpage administratif

[Lien de l'API](https://geo.api.gouv.fr/decoupage-administratif)

Créer une page web avec 2 menus déroulants (pour la sélection de régions et la sélection de départements) et un bouton "Afficher les communes".

* Au chargement de la page, récupérer la liste de toutes les régions et mettre à jour le menu déroulant "Liste des régions"
* Lorsqu'une région a été sélectionnée dans ce menu déroulant, récupérer la liste des départements de cette région et mettre à jour le menu déroulant "Liste des départements"
* Lorsque l'on clique sur le bouton "Afficher les communes", récupérer la liste des communes du département sélectionné et les afficher dans une liste (afficher le nom et entre parenthèses afficher la population)
* [BONUS] Trier la liste des communes en fonction de leur population (de la plus peuplée à la moins peuplée) avant de l'afficher

### Adresse

[Lien de l'API](https://adresse.data.gouv.fr/api-doc/adresse)

Créer une page web avec un bouton "Me géolocaliser" et un paragraphe html en-dessous.

* Lorsque l'on clique sur le bouton "Me géolocaliser", récupérer la position de l'utilisateur (coordonnées gps) grâce à l'API JavaScript *geolocation*
* Une fois la position de l'utilisateur récupérée, récupérer l'adresse correspondante à ces coordonnées grâce à l'API *adresse*

**NB :** L'adresse sur ordinateur manque souvent de précision, essayer de tester également sur mobile

**Liens utiles :**
* [API geolocation](https://developer.mozilla.org/fr/docs/Web/API/Geolocation_API)
* [Fonction getCurrentPosition](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)

### Liste des cinémas

[Lien de l'API](https://data.culture.gouv.fr/explore/dataset/etablissements-cinematographiques/api/)

* Afficher la liste des 20 premiers cinémas (noms, adresse et villes)
* Trier la liste des cinémas en affichant les cinémas contenant le plus de fauteuils tout en haut de la page (vous pouvez utiliser la fonction *sort*)
* [BONUS] Récupérer la liste des cinémas proches de votre position
* [BONUS++] Afficher tous les cinémas proches de votre position sur une carte (OpenStreetMat, Mapbox...)