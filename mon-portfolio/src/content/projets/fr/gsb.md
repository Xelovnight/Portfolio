---
title: "GSB Frais - Notes de Frais"
"date": 2025-01-08
description: "Développement d'une application web PHP/MVC pour la saisie, le contrôle et la validation des notes de frais d'une entreprise pharmaceutique."
tags: ["PHP 8", "MySQL", "MVC", "AJAX", "Bootstrap"]
---

Projet de groupe réalisé dans un contexte pédagogique de gestion de projet informatique. L'objectif était de faire évoluer une application existante de gestion de frais (initialement destinée aux visiteurs médicaux) en y intégrant un espace complet dédié au service comptable.

**Architecture et Technologies**
* Application construite sur une architecture **MVC** (Modèle-Vue-Contrôleur) avec routage via `index.php` et `ajax.php`.
* Back-end développé en **PHP 8** orienté objet avec un système d'autoloading via **Composer** (norme PSR-4).
* Base de données **MySQL** avec accès sécurisé via **PDO** (requêtes préparées pour prévenir les injections SQL).
* Front-end structuré en HTML5/CSS3 avec **Bootstrap**, dynamisé par **JavaScript** et **AJAX** pour des échanges asynchrones au format **JSON**.

**Fonctionnalités Principales**
* **Gestion des rôles** : Authentification sécurisée (`password_hash`) différenciant les visiteurs médicaux et les comptables avec gestion fine des sessions.
* **Saisie et suivi** : Enregistrement des frais forfaitisés (repas, nuitées, kilomètres) et hors forfait.
* **Espace Comptable** : Interface dédiée pour consulter, corriger, reporter au mois suivant, valider et suivre le remboursement des fiches.
* **Génération de documents** : Création automatique de récapitulatifs au format PDF (via la bibliothèque **FPDF**), avec sauvegarde en base de données pour optimiser les performances.

**Compétences Validées**
Ce projet m'a permis de consolider mes compétences en conception d'application web relationnelle, en sécurisation des données, en traitement asynchrone (AJAX) et en reprise de code sur un projet existant en équipe.