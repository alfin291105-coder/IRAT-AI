# IRAT AI Architecture

## Overview

IRAT AI menggunakan arsitektur modular agar setiap komponen memiliki tanggung jawab yang jelas, mudah dikembangkan, dan mudah diuji.

---

## High-Level Architecture

```text
Client
    │
    ▼
REST API
    │
    ▼
Controllers
    │
    ▼
Services
    │
    ▼
AI Engine
    │
    ├── Context Builder
    ├── Memory System
    └── AI Provider
            │
            ▼
       AI Model
```

---

## Backend Structure

```text
backend/
└── src/
    ├── ai/
    ├── config/
    ├── controllers/
    ├── database/
    ├── memory/
    ├── middleware/
    ├── repositories/
    ├── routes/
    ├── services/
    └── utils/
```

---

## Layer Responsibilities

### Routes

Menerima HTTP request dan meneruskannya ke controller.

### Controllers

Memproses request dan response.

### Services

Menjalankan business logic.

### AI Engine

Menyusun context dan berkomunikasi dengan AI Provider.

### Memory System

Mengelola short memory, long memory, extraction, ranking, dan retrieval.

### Repositories

Mengakses database.

### Database

Menyimpan conversations dan memories.

---

## Future Architecture

* OpenAI Provider
* Ollama Provider
* Multi Provider
* User Profile Manager
* Memory Deduplication
* Vector Search
* Voice Assistant
