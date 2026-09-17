---
title: "Simulation 7 Wonders & IA"
"date": 2025-12-11
description: "Développement d'un moteur de jeu complet et d'une simulation automatisée pour comparer des stratégies d'intelligence artificielle."
tags: ["Java 17", "Multithreading", "Pattern Strategy", "UML"]
---

Projet académique réalisé en équipe, consistant à concevoir l'architecture logicielle et à développer une version console du jeu de société *7 Wonders*. L'objectif principal était de simuler automatiquement des milliers de parties pour comparer les performances de différentes intelligences artificielles.

**Architecture et Modélisation**
* Analyse complète des exigences fonctionnelles et modélisation via des diagrammes d'activité UML en amont du développement.
* Implémentation du **Design Pattern Strategy** pour isoler les comportements des joueurs et basculer facilement d'une IA à l'autre sans altérer le moteur de jeu.
* Structuration rigoureuse du code en packages métiers (`model`, `strategy`, `enums`) et tests unitaires complets avec **JUnit 5**.

**Moteur de Jeu**
* Gestion intégrale des règles officielles : trois âges, système de draft, rotation des mains, commerce de ressources entre voisins et conflits militaires.
* Implémentation de logiques complexes : construction gratuite par chaînage, développement progressif des merveilles et calcul dynamique des scores (civils, scientifiques, militaires, commerciaux).

**Intelligence Artificielle et Stratégies**
Création de plusieurs profils de joueurs autonomes :
* `RandomBotStrategy` : sélection aléatoire des actions légales.
* `GreedyBotStrategy` : optimisation des gains immédiats en points de victoire.
* `ScienceBotStrategy` : maximisation des symboles scientifiques.
* `HumanStrategy` : interaction textuelle pour affronter les bots.

**Performances et Simulation**
* Exécution séquentielle ou parallèle d'un grand nombre de parties grâce au multithreading (API **Java Concurrency** / `ExecutorService`).
* Génération de rapports globaux d'analyse de performances au format JSON (via `JSON-simple`).
* Interface console enrichie avec des codes couleurs ANSI et manipulation des données via **Java Streams**.