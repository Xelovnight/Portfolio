---
title: "CGB - Bank Transfer API"
description: "Secure Java/Spring Boot banking API for managing account transfers, JWT authentication, and financial transaction validation."
date: 2024-04-29
tags: ["Java 20", "Spring Boot", "Spring Security", "JWT", "JPA/Hibernate"]
---

Development of a backend REST API dedicated to bank transfer management. The main objective of this project is to implement reliable financial business logic while ensuring transaction security and operational traceability.

**Architecture & Technologies**
* Backend development in **Java 20** using the **Spring Boot 3.4.2** framework.
* Robust multi-layered architecture organized into Controllers, Services, Repositories, Entities, and DTOs.
* Data persistence managed by **Spring Data JPA** and **Hibernate** on an **H2** relational database (using HikariCP).
* Utilization of modern development and testing tools: Lombok, Maven, JUnit, and Spring Boot Test.

**Security & Key Features**
* **Authentication & Authorization:** Integration of **Spring Security** with **JWT** token generation and validation to protect endpoints and manage user roles. Passwords are encrypted using `BCryptPasswordEncoder`.
* **Business Logic:** Strict verification of account funds and balances prior to validating any transfer request.
* **Transaction Management:** Implementation of the `@Transactional` annotation at the service level to guarantee the integrity of banking operations.
* **Traceability:** Systematic logging of user actions and the status of every financial transaction.

This project demonstrates my ability to design a Service-Oriented Architecture (SOA), effectively secure an API, and master data persistence within a realistic business context.