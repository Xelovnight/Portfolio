---
title: "Reachy Mini - Smart Assistant"
description: "Development of an interactive robotic assistant integrating voice recognition, LLMs, computer vision, and physical animations."
date: 2026-08-30
tags: ["Python", "FastAPI", "Node.js", "AI / LLM", "Robotics"]
---

Design and development of a smart reception assistant utilizing the Reachy Mini humanoid robot. The project aims to guide, inform, and assist MIAGE students through natural multimodal interaction (voice, vision, and physical movements).

**Distributed Technical Architecture**
The system is divided into three microservices to ensure modularity and performance:
* **AI Core (Python / FastAPI):** Handles audio requests, utilizes **Whisper** (faster-whisper) for Speech-to-Text transcription, and leverages the **Qwen** model (via Hugging Face API) for Natural Language Processing, intent classification, and response generation.
* **Business Middleware (Node.js / Express):** A server exposing a REST API to query institutional data (schedules, student records, faculty directory).
* **Robotic Application (Python):** Hardware orchestration using the Reachy Mini SDK, **OpenCV** for camera processing, `sounddevice` for active listening, and **gTTS/Pygame** for text-to-speech synthesis.

**Key Features**
* **Voice Interaction:** Wake-word detection ("Hey Reachy"), active listening, real-time transcription, and dynamically generated spoken responses in French.
* **Vision & Authentication:** QR code scanning via the robot's camera (e.g., student ID cards) to unlock access to personal records.
* **Intent Processing:** Capability to query timetables, locate professors, or answer generic administrative questions based on LLM JSON extraction.
* **Dynamic Behavior:** Synchronization of voice responses with contextual physical animations (waking up, thinking, validating, error handling, standby) managed via Python threads.

**Skills Developed**
This project highlights a strong ability to integrate Artificial Intelligence models (LLMs, STT/TTS) into a distributed architecture, while managing the complex constraints of Human-Machine Interaction (HMI) on physical robotic hardware.