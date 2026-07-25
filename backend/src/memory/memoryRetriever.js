// =========================================
// Memory Retriever IRAT AI v0.3.0
// Intelligent Memory Retrieval
// =========================================

const longMemory = require("./longMemory");
const { detectIntent } = require("./intentDetector");
const { rankMemories } = require("./memoryRanker");

/**
 * Mengambil memory yang paling relevan
 */
async function retrieveMemory(userId, message) {

    // Ambil semua memory user
    const memories = await longMemory.getMemories(userId);

    // Jika belum ada memory
    if (!memories || memories.length === 0) {
        return [];
    }

    // Deteksi intent
    const { intent } = detectIntent(message);

    // Ranking memory
    const ranked = rankMemories(
        memories,
        message,
        intent
    );

    // Ambil hanya memory yang benar-benar relevan
    const relevant = ranked.filter(memory => memory.score > 0);

    // Maksimal kirim 5 memory ke AI
    return relevant.slice(0, 5);

}

module.exports = {
    retrieveMemory
};