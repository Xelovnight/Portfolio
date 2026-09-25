---
title: "7 Wonders Simulation & AI"
"date": 2025-12-11
description: "Development of a complete game engine and automated simulation to compare artificial intelligence strategies."
tags: ["Java 17", "Multithreading", "Strategy Pattern", "UML"]
---

An academic team project focused on designing the software architecture and developing a console version of the board game *7 Wonders*. The main objective was to automatically simulate thousands of matches to evaluate and compare different artificial intelligence performances.

**Architecture & Modeling**
* Comprehensive functional requirements analysis and UML activity diagram modeling prior to development.
* Implementation of the **Strategy Design Pattern** to isolate player behaviors, allowing seamless switching between AIs without modifying the core game engine.
* Strict code organization into domain packages (`model`, `strategy`, `enums`) backed by extensive unit testing with **JUnit 5**.

**Game Engine**
* Full implementation of official rules: three ages, card drafting, hand rotation, neighbor resource trading, and military conflicts.
* Complex logic integration: free building chains, progressive wonder development, and dynamic score calculation (civilian, scientific, military, commercial).

**Artificial Intelligence & Strategies**
Creation of multiple autonomous player profiles:
* `RandomBotStrategy`: Random selection of legal actions.
* `GreedyBotStrategy`: Prioritizes immediate victory point gains.
* `ScienceBotStrategy`: Focuses on maximizing scientific symbols and sets.
* `HumanStrategy`: Terminal-based interaction to play against bots.

**Performance & Simulation**
* Sequential or parallel execution of massive simulation batches using multithreading (**Java Concurrency API** / `ExecutorService`).
* Generation of global performance analysis reports in JSON format (using `JSON-simple`).
* Enhanced console interface with ANSI color codes and efficient data manipulation via **Java Streams**.