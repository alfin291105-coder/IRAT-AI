const db = require("../database/db");

/**
 * Simpan memory baru
 */
function saveMemory(userId, category, content, importance = 1) {
    return new Promise((resolve, reject) => {

        db.run(
            `
            INSERT INTO memories
            (userId, category, content, importance)
            VALUES (?, ?, ?, ?)
            `,
            [userId, category, content, importance],
            function (err) {

                if (err) {
                    return reject(err);
                }

                resolve(this.lastID);
            }
        );

    });
}

/**
 * Ambil semua memory milik user
 */
function getMemories(userId) {
    return new Promise((resolve, reject) => {

        db.all(
            `
            SELECT *
            FROM memories
            WHERE userId = ?
            ORDER BY importance DESC, updatedAt DESC
            `,
            [userId],
            (err, rows) => {

                if (err) {
                    return reject(err);
                }

                resolve(rows);
            }
        );

    });
}

/**
 * Ambil memory berdasarkan kategori
 */
function getMemoriesByCategory(userId, category) {
    return new Promise((resolve, reject) => {

        db.all(
            `
            SELECT *
            FROM memories
            WHERE userId = ?
            AND category = ?
            ORDER BY importance DESC
            `,
            [userId, category],
            (err, rows) => {

                if (err) {
                    return reject(err);
                }

                resolve(rows);
            }
        );

    });
}

/**
 * Hapus memory
 */
function deleteMemory(id) {
    return new Promise((resolve, reject) => {

        db.run(
            `
            DELETE FROM memories
            WHERE id = ?
            `,
            [id],
            function (err) {

                if (err) {
                    return reject(err);
                }

                resolve(this.changes);
            }
        );

    });
}

module.exports = {
    saveMemory,
    getMemories,
    getMemoriesByCategory,
    deleteMemory
};