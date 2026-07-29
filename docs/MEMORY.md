# Context Engine

## Conversation History

- Menyimpan riwayat percakapan sementara.
- Digunakan untuk follow up.

## Follow Up Detector

Mendeteksi pertanyaan lanjutan.

Contoh:

User:
Saya bertemu Andi.

User:
Dia bekerja di mana?

Follow Up: Ya

## Pronoun Resolver

Menghubungkan kata ganti dengan entity sebelumnya.

Contoh:

Saya bertemu Andi.
Dia bekerja di mana?

Dia → Andi

## Context Optimizer

Mengurangi context jika token melebihi batas.

## Context Selector

Memilih pesan yang paling relevan.