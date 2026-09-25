---
title: "Reachy Mini - Assistant d'Accueil"
description: "Développement d'un assistant robotique interactif intégrant reconnaissance vocale, LLM, vision par ordinateur et animations physiques."
date: 2026-08-30
tags: ["Python", "FastAPI", "Node.js", "IA / LLM", "Robotique"]
---

Conception et développement d'un assistant d’accueil intelligent basé sur le robot humanoïde Reachy Mini. L'objectif de ce projet est d'accompagner, d'orienter et d'informer les étudiants de la MIAGE grâce à une interaction multimodale naturelle (voix, vision et mouvements).

**Architecture Technique Distribuée**
Le système est découpé en trois microservices pour garantir modularité et performance :
* **Cœur IA (Python / FastAPI) :** Réception des requêtes audio, transcription via **Whisper** (faster-whisper), et analyse du langage naturel avec le modèle **Qwen** (Hugging Face API) pour classifier les intentions et générer les réponses.
* **Middleware Métier (Node.js / Express) :** Serveur exposant une API REST pour interroger les données institutionnelles (plannings, dossiers étudiants, annuaire des professeurs).
* **Application Robotique (Python) :** Orchestration matérielle utilisant le SDK Reachy Mini, **OpenCV** pour la caméra, `sounddevice` pour l'écoute, et **gTTS/Pygame** pour la synthèse vocale.

**Fonctionnalités Principales**
* **Interaction vocale :** Déclenchement via le mot-clé « Hey Reachy », écoute, transcription textuelle et réponses générées vocalement en français.
* **Vision et Authentification :** Scan de QR codes via la caméra du robot (ex: carte étudiante) pour déverrouiller l'accès aux dossiers personnels.
* **Traitement des intentions :** Capacité à interroger les plannings, localiser un professeur ou répondre à des requêtes administratives.
* **Comportement dynamique :** Synchronisation de réponses vocales avec des animations physiques contextuelles (réveil, réflexion, validation, erreur, mise en veille) gérées via des threads Python.

**Compétences Validées**
Ce projet souligne une forte capacité à intégrer des modèles d'Intelligence Artificielle (LLM, STT/TTS) dans une architecture distribuée, tout en gérant les contraintes complexes de l'interaction homme-machine (IHM) sur du matériel robotique physique.