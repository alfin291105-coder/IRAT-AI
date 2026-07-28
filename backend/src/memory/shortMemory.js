// =========================================
// Short Memory IRAT AI v0.2.0
// Menyimpan percakapan sementara di RAM
// =========================================

const shortMemory = new Map();

const MAX_HISTORY = 20;

/**
 * Menambahkan pesan ke short memory
 */
function addMessage(sessionId, role, message) {
    if (!shortMemory.has(sessionId)) {
        shortMemory.set(sessionId, []);
    }

    const history = shortMemory.get(sessionId);

    history.push({
    role,
    content: message,
    timestamp: new Date().toISOString()
});

    // Simpan hanya MAX_HISTORY pesan terakhir
    if (history.length > MAX_HISTORY) {
        history.shift();
    }
}

/**
 * Mengambil seluruh history session
 */
function getHistory(sessionId) {
    return shortMemory.get(sessionId) || [];
}

/**
 * Menghapus history session
 */
function clearHistory(sessionId) {
    shortMemory.delete(sessionId);
}

/**
 * Jumlah session aktif
 */
function getSessionCount() {
    return shortMemory.size;
}

module.exports = {
    addMessage,
    getHistory,
    clearHistory,
    getSessionCount
};