// =========================================
// Memory Retriever IRAT AI v0.2.0
// Mengambil memory yang relevan
// =========================================

const longMemory = require("./longMemory");


async function retrieveMemory(userId, message) {

    const memories = await longMemory.getMemories(userId);

    const keywords = message
        .toLowerCase()
        .split(" ")
        .filter(word => word.length > 3);


    const relevant = memories.filter(memory => {

        const content = memory.content.toLowerCase();

        return keywords.some(keyword =>
            content.includes(keyword)
        );

    });


    return relevant;

}


module.exports = {
    retrieveMemory
};