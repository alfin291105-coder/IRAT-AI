// =========================================
// Memory Retriever IRAT AI v0.2.0
// Mengambil memory yang relevan
// =========================================

const longMemory = require("./longMemory");

async function retrieveMemory(userId, message) {

    const memories = await longMemory.getMemories(userId);

    const keyword = message.toLowerCase();

    const relevant = memories.filter(memory =>
        memory.content.toLowerCase().includes(keyword) ||
        keyword.includes(memory.category.toLowerCase())
    );

    return relevant;

}

module.exports = {
    retrieveMemory
};