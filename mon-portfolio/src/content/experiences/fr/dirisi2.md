---
role: "Stagiaire Développement - IA & Docker"
company: "DIRISI (Ministère des Armées)"
location: "Toulon, France"
startDate: 2025-01-01
endDate: 2025-02-28
skills: ["Docker", "IA", "Ollama", "LLaMA 3.2", "Méthode Agile"]
---

Stage de 5 semaines réalisé lors de ma deuxième année de BTS SIO (option SLAM), axé sur l'intégration et le déploiement de solutions d'Intelligence Artificielle.

**Contexte et Preuve de Concept (PoC)**
La mission principale consistait à rechercher et déployer une alternative locale, hors-ligne, open-source et gratuite aux IA d'analyse de documents. L'objectif était de fournir un outil sécurisé pour le Ministère des Armées, facilitant la prise de notes et la compréhension de documents complexes.

**Mise en place et Déploiement**
* Conception de l'architecture et conteneurisation de l'environnement complet avec **Docker**.
* Déploiement simultané de la base de données newSQL **SurrealDB**, du moteur d'IA **Ollama** et de l'interface **OpenNotebook AI**.

**Configuration IA et Tests**
* Importation et configuration de modèles d'IA spécialisés fonctionnant 100% en local : **LLaMA 3.2** pour le traitement du langage naturel et **mxbai-embed-large** pour l'embedding vectoriel.
* Ajustement de l'application pour gérer de manière autonome les limitations de l'environnement isolé (ex: gestion des erreurs liées à l'absence de modèles de transcription audio).
* Tests fonctionnels complets : création de notebooks, import de sources documentaires multi-formats et validation de l'assistance par l'IA.