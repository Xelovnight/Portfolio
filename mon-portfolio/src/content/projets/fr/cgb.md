---
title: "CGB - API de Transferts Bancaires"
description: "API bancaire Java/Spring Boot sécurisée pour la gestion des transferts entre comptes, l'authentification JWT et la validation des opérations."
date: 2025-04-29
tags: ["Java 20", "Spring Boot", "Spring Security", "JWT", "JPA/Hibernate"]
---

Développement d'une API backend REST dédiée à la gestion des transferts bancaires. L'objectif de ce projet est de mettre en place une logique métier financière fiable en garantissant la sécurité des transactions et la traçabilité des opérations.

**Architecture et Technologies**
* Développement backend en **Java 20** avec le framework **Spring Boot 3.4.2**.
* Architecture multicouche robuste organisée en Controllers, Services, Repositories, Entities et DTO.
* Persistance des données gérée par **Spring Data JPA** et **Hibernate** sur une base de données relationnelle **H2** (avec HikariCP).
* Utilisation d'outils modernes de développement et de test : Lombok, Maven, JUnit, Spring Boot Test.

**Sécurité et Fonctionnalités Principales**
* **Authentification et Autorisation :** Intégration de **Spring Security** avec génération et validation de tokens **JWT** pour protéger les endpoints et gérer les rôles utilisateurs. Les mots de passe sont hachés via `BCryptPasswordEncoder`.
* **Logique Métier :** Vérification stricte des provisions et des soldes avant la validation de tout transfert.
* **Gestion des Transactions :** Utilisation de l'annotation `@Transactional` au niveau du service pour garantir l'intégrité des opérations bancaires.
* **Traçabilité :** Journalisation systématique des actions et du statut de chaque transaction financière.

Ce projet illustre ma capacité à concevoir une application orientée services (SOA), à sécuriser efficacement une API et à maîtriser la persistance des données dans un contexte métier réaliste.