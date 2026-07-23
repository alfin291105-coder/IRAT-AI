const db = require("./db");

db.serialize(() => {

    // ==========================
    // Tabel Messages (v0.1.0)
    // ==========================
    db.run(`
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId TEXT,
            message TEXT,
            reply TEXT,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // ==========================
    // Riwayat Percakapan
    // ==========================
    db.run(`
        CREATE TABLE IF NOT EXISTS conversations (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sessionId TEXT NOT NULL,
            role TEXT NOT NULL,
            message TEXT NOT NULL,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // ==========================
    // Long Memory
    // ==========================
    db.run(`
        CREATE TABLE IF NOT EXISTS memories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId TEXT NOT NULL,
            category TEXT NOT NULL,
            content TEXT NOT NULL,
            importance INTEGER DEFAULT 1,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    // ==========================
    // Relasi Memory ↔ Conversation
    // ==========================
    db.run(`
        CREATE TABLE IF NOT EXISTS memory_links (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            memoryId INTEGER NOT NULL,
            conversationId INTEGER NOT NULL,
            FOREIGN KEY(memoryId) REFERENCES memories(id),
            FOREIGN KEY(conversationId) REFERENCES conversations(id)
        )
    `);

});

console.log("✅ Database siap");