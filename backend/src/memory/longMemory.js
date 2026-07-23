// =========================================
// Long Memory IRAT AI v0.2.0
// Business Logic
// =========================================

const memoryRepository = require("../repositories/memoryRepository");

/**
 * Simpan memory
 */
async function saveMemory(userId, category, content, importance = 1) {
    return await memoryRepository.saveMemory(
        userId,
        category,
        content,
        importance
    );
}

/**
 * Ambil semua memory user
 */
async function getMemories(userId) {
    return await memoryRepository.getMemories(userId);
}

/**
 * Ambil memory berdasarkan kategori
 */
async function getMemoriesByCategory(userId, category) {
    return await memoryRepository.getMemoriesByCategory(
        userId,
        category
    );
}

/**
 * Hapus memory
 */
async function deleteMemory(id) {
    return await memoryRepository.deleteMemory(id);
}

module.exports = {
    saveMemory,
    getMemories,
    getMemoriesByCategory,
    deleteMemory
};