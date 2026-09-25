---
title: "GSB Frais - Expense Management"
"date": 2025-01-08
description: "Development of a PHP/MVC web application for submitting, reviewing, and validating expense reports in a pharmaceutical company."
tags: ["PHP 8", "MySQL", "MVC", "AJAX", "Bootstrap"]
---

A team project conducted in an academic IT project management context. The goal was to upgrade an existing expense management application (originally meant only for medical representatives) by integrating a comprehensive workspace for the accounting department.

**Architecture & Technologies**
* Application built on an **MVC** (Model-View-Controller) architecture with routing handled by `index.php` and `ajax.php`.
* Back-end developed in Object-Oriented **PHP 8** using **Composer** for PSR-4 autoloading.
* **MySQL** database with secure access via **PDO** (prepared statements to prevent SQL injection).
* Front-end structured with HTML5/CSS3 and **Bootstrap**, made dynamic with **JavaScript** and **AJAX** for asynchronous **JSON** data exchanges.

**Key Features**
* **Role Management**: Secure authentication (`password_hash`) distinguishing medical representatives from accountants, with strict session management.
* **Expense Tracking**: Submission of fixed expenses (meals, accommodation, mileage) and out-of-pocket costs.
* **Accounting Workspace**: Dedicated interface to review, edit, postpone to the next month, validate, and track the reimbursement of expense reports.
* **Document Generation**: Automatic creation of PDF summaries (using the **FPDF** library), saving them directly to the database to optimize performance.

**Skills Developed**
This project allowed me to strengthen my skills in relational web app design, data security, asynchronous processing (AJAX), and taking over existing codebases within a collaborative team environment.