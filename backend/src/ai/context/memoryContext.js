// =========================================
// Memory Context
// IRAT AI v0.5.0
// =========================================

const { rankMemories } = require("./contextRanker");

function buildMemoryContext(memories = []) {

    const rankedMemories = rankMemories(
        memories
    );

    return rankedMemories.map(memory => ({
        category: memory.category,
        importance: memory.importance,
        content: memory.content
    }));
}

module.exports = {
    buildMemoryContext
};