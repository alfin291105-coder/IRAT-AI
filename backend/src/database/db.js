///----------------------------------------------
/// Database Connection
///----------------------------------------------

const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../../data/irat.db");

console.log("Database Path:", dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("❌ Database gagal dibuka:", err.message);
    } else {
        console.log("✅ Database SQLite terhubung");
    }
});

module.exports = db;