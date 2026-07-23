const db = require("./db");

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId TEXT,
            message TEXT,
            reply TEXT,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

});

console.log("✅ Database siap");