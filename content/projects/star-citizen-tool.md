---
title: "Star Citizen Tool"
date: 2024-01-03T18:48:01+01:00
draft: false
author: "VivienG"
type: featured
tags: ["NUXT", "Vue.js", "TypeScript", "Tailwind CSS", "Star Citizen", "Rest API"]
categories: ["Portfolio"]
summary: "Projet Nuxt permettant de consulter la liste des vaisseaux du jeu Star Citizen."
link_to_website: "https://star-citizen-tool.vivieng.com/"
big_thumbnail: "images/star-citizen-tool-big.jpg"
medium_thumbnail: "images/star-citizen-tool-medium.jpg"
small_thumbnail: "images/star-citizen-tool-small.jpg"
alt_thumbnail: "Star Citizen Tool project"
---

Projet réalisé avec Nuxt 3, Tailwind CSS et TypeScript permettant de consulter les caractéristiques des vaisseaux du jeu Star Citizen.

J'ai utilisé l'API REST ["StarCitizen-API"](https://starcitizen-api.com/index.php) pour récupérer les données des vaisseaux du jeu. Ce choix était motivé par le besoin de pratiquer l'implémentation d'une API externe dans un projet Nuxt.
Ensuite, j'ai utilisé ["Tailwind CSS"](https://tailwindcss.com/) pour le design du site ainsi que ["TypeScript"](https://www.typescriptlang.org/) pour le typage des données.

J'ai dû créer mon propre système de pagination côté front-end car l'API ne permettait pas de récupérer les données de cette manière. Cela a entraîné un temps de chargement relativement long puisque toutes les données doivent être récupérées en une seule fois.

Il manque encore quelques fonctionnalités, comme le filtrage par catégorie. Cependant, l'API présente de grandes lacunes qui ne permettent pas de réaliser cela "facilement". Je devrais donc le faire côté front-end une fois de plus. Malgré cela, le projet est fonctionnel et m'a permis de pratiquer avec Nuxt 3 et Tailwind CSS.
