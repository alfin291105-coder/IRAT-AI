// =========================================
// Memory Manager IRAT AI v0.2.0
// Menggabungkan Short Memory & Long Memory
// =========================================

const longMemory = require("./longMemory");
const profileManager = require("./profileManager");
const shortMemory = require("./shortMemory");
const duplicateMemoryDetector = require("./duplicateMemoryDetector");
const memoryUpdater = require("./memoryUpdater");
const memoryRepository = require("../repositories/memoryRepository");

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
    return await profileManager.saveProfileMemory(
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
 * Cek apakah memory ke duplikat 
 */
async function hasDuplicateMemory(userId, memory) {
    const memories = await longMemory.getMemories(userId);

    return duplicateMemoryDetector.isDuplicate(
        memory,
        memories
    );
}

/**
 * Cari memory yang cocok untuk di update
 */
async function findMemoryForUpdate(userId, memory) {
    const memories = await longMemory.getMemories(userId);

    return memoryUpdater.findMemoryToUpdate(
        memory,
        memories
    );
}

/**
 * Update long memory
 */
async function updateLongMemory(memoryId, memory) {
    return await memoryRepository.updateMemory(
        memoryId,
        memory.content,
        memory.importance
    );
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
    hasDuplicateMemory,
    findMemoryForUpdate,
    updateLongMemory,
    clearConversation
};