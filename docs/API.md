# IRAT AI API

Dokumentasi endpoint REST API untuk backend IRAT AI.

---

## Base URL

```text
http://localhost:3000
```

---

## GET /

Mengembalikan status backend.

### Response

```json
{
  "message": "IRAT AI Backend Running"
}
```

---

## GET /health

Memeriksa apakah backend berjalan dengan baik.

### Response

```json
{
  "status": "ok"
}
```

---

## POST /chat

Mengirim pesan ke IRAT AI dan menerima balasan.

### Request

```json
{
  "message": "Halo IRAT AI"
}
```

### Response

```json
{
  "success": true,
  "reply": "Halo! Ada yang bisa saya bantu?"
}
```

---

## Response Format

Semua endpoint mengembalikan data dalam format JSON.

Contoh sukses:

```json
{
  "success": true,
  "data": {}
}
```

Contoh gagal:

```json
{
  "success": false,
  "error": "Error message"
}
```

---

## Future Endpoints

Endpoint berikut direncanakan untuk versi mendatang:

* `GET /memory`
* `POST /memory`
* `PUT /memory`
* `DELETE /memory`
* `GET /profile`
* `PUT /profile`
* `POST /voice`
* `POST /upload`
* `POST /screen-share`
