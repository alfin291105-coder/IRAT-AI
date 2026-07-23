// =========================================
// Memory Manager IRAT AI v0.2.0
// Menggabungkan Short Memory & Long Memory
// =========================================

const shortMemory = require("./shortMemory");
const longMemory = require("./longMemory");

/**
 * Tambahkan pesan ke short memory
 */
function addConversation(sessionId, role, message) {
    shortMemory.addMessage(sessionId, role, message);
}

/**
 * Ambil history percakapan
 */
function getConversation(sessionId) {
    return shortMemory.getHistory(sessionId);
}

/**
 * Simpan long memory
 */
async function saveLongMemory(userId, category, content, importance = 1) {
    return await longMemory.saveMemory(
        userId,
        category,
        content,
        importance
    );
}

/**
 * Ambil semua long memory
 */
async function getLongMemory(userId) {
    return await longMemory.getMemories(userId);
}

/**
 * Hapus session
 */
function clearConversation(sessionId) {
    shortMemory.clearHistory(sessionId);
}

module.exports = {
    addConversation,
    getConversation,
    saveLongMemory,
    getLongMemory,
    clearConversation
};