// =========================================
// Memory Retriever IRAT AI v0.3.0
// Intelligent Memory Retrieval
// =========================================

const longMemory = require("./longMemory");
const { detectIntent } = require("./intentDetector");
const { rankMemories } = require("./memoryRanker");
const { filterValidMemories } = require("./memoryValidator");

/**
 * Mengambil memory yang paling relevan
 */
async function retrieveMemory(userId, message) {
  // Ambil semua memory user
  const memories = await longMemory.getMemories(userId);

  // Filter memory yang valid
  const validMemories = filterValidMemories(memories);

  // Jika belum ada memory
  if (!validMemories || validMemories.length === 0) {
    return [];
  }

  // Deteksi intent
  const { intent } = detectIntent(message);

  // Ranking memory
  const ranked = rankMemories(validMemories);

  // Ambil hanya memory yang benar-benar relevan
  const relevant = ranked.filter((memory) => memory.contextScore >= 10);

  // Maksimal kirim 5 memory ke AI
  return relevant.slice(0, 5);
}

module.exports = {
  retrieveMemory,
};
