 # IRAT AI Database

Dokumentasi struktur database yang digunakan oleh IRAT AI.

---

## Database Engine

* SQLite

---

## Tables

### messages

Menyimpan riwayat chat sederhana.

| Column    | Type     | Description    |
| --------- | -------- | -------------- |
| id        | INTEGER  | Primary Key    |
| userId    | TEXT     | User ID        |
| message   | TEXT     | Pesan pengguna |
| reply     | TEXT     | Balasan AI     |
| createdAt | DATETIME | Waktu dibuat   |

---

### conversations

Menyimpan riwayat percakapan berdasarkan session.

| Column    | Type     | Description      |
| --------- | -------- | ---------------- |
| id        | INTEGER  | Primary Key      |
| sessionId | TEXT     | Session ID       |
| role      | TEXT     | user / assistant |
| message   | TEXT     | Isi pesan        |
| createdAt | DATETIME | Waktu dibuat     |

---

### memories

Menyimpan long-term memory pengguna.

| Column     | Type     | Description       |
| ---------- | -------- | ----------------- |
| id         | INTEGER  | Primary Key       |
| userId     | TEXT     | User ID           |
| category   | TEXT     | Kategori memory   |
| content    | TEXT     | Isi memory        |
| importance | INTEGER  | Nilai kepentingan |
| createdAt  | DATETIME | Waktu dibuat      |
| updatedAt  | DATETIME | Waktu diperbarui  |

---

### memory_links

Relasi antara memory dan conversation.

| Column         | Type    | Description                |
| -------------- | ------- | -------------------------- |
| id             | INTEGER | Primary Key                |
| memoryId       | INTEGER | Referensi ke memories      |
| conversationId | INTEGER | Referensi ke conversations |

---

## Relationships

```text
messages
    │

conversations
    │
    ├──────────────┐
    │              │
    ▼              ▼
memory_links → memories
```

---

## Future Tables

Tabel yang direncanakan untuk versi berikutnya:

* profiles
* settings
* attachments
* ai_providers
* vector_memories
