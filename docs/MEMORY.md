# IRAT AI Memory System

Dokumentasi sistem memori yang digunakan oleh IRAT AI.

---

## Overview

IRAT AI menggunakan kombinasi **Short Memory** dan **Long Memory** untuk memahami percakapan serta mengingat informasi penting pengguna.

---

## Memory Flow

```text
User Message
      │
      ▼
Memory Extractor
      │
      ▼
Memory Manager
      │
      ├── Short Memory
      │
      └── Long Memory
              │
              ▼
       Memory Retriever
              │
              ▼
        Memory Ranker
              │
              ▼
       Context Builder
              │
              ▼
          AI Engine
```

---

## Components

### Short Memory

Menyimpan riwayat percakapan dalam satu sesi.

### Long Memory

Menyimpan informasi penting pengguna secara permanen di database.

### Memory Extractor

Mengekstrak fakta penting dari pesan pengguna menggunakan rule-based extractor.

### Memory Manager

Mengelola alur penyimpanan dan pengambilan memory.

### Memory Ranker

Menghitung relevansi memory berdasarkan:

* Category
* Keyword Matching
* Importance
* Recency

### Memory Retriever

Mengambil memory yang paling relevan untuk pertanyaan pengguna.

### Context Builder

Menyusun memory yang relevan menjadi context sebelum dikirim ke AI.

---

## Memory Categories

Saat ini IRAT AI mendukung kategori berikut:

* identity
* work
* hobby
* preference

Kategori lain akan ditambahkan pada versi berikutnya.

---

## Future Development

* User Profile Manager
* Memory Update
* Memory Deduplication
* Semantic Memory Search
* Vector Memory
* Memory Compression
* Knowledge Graph
