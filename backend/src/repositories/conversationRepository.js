const db = require("../database/db");

/**
 * Menyimpan percakapan
 */
function saveConversation(sessionId, role, message) {
    return new Promise((resolve, reject) => {

        db.run(
            `
            INSERT INTO conversations
            (sessionId, role, message)
            VALUES (?, ?, ?)
            `,
            [sessionId, role, message],
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
 * Mengambil seluruh percakapan berdasarkan session
 */
function getConversation(sessionId) {
    return new Promise((resolve, reject) => {

        db.all(
            `
            SELECT *
            FROM conversations
            WHERE sessionId = ?
            ORDER BY id ASC
            `,
            [sessionId],
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
 * Menghapus seluruh percakapan berdasarkan session
 */
function clearConversation(sessionId) {
    return new Promise((resolve, reject) => {

        db.run(
            `
            DELETE FROM conversations
            WHERE sessionId = ?
            `,
            [sessionId],
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
    saveConversation,
    getConversation,
    clearConversation
};