// =========================================
// Memory Ranker IRAT AI v0.3.0
// Menghitung relevansi memory
// =========================================

function normalize(text = "") {
    return text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, " ")
        .replace(/\s+/g, " ")
        .trim();
}

function calculateScore(memory, message, detectedIntent) {

    let score = 0;

    const content = normalize(memory.content);
    const messageText = normalize(message);

    // Intent / category cocok
    if (
        detectedIntent &&
        memory.category === detectedIntent
    ) {
        score += 100;
    }

    // Keyword matching
    const words = messageText
        .split(" ")
        .filter(word => word.length >= 3);

    for (const word of words) {

        if (content.includes(word)) {
            score += 10;
        }

    }

    // Importance
    score += (memory.importance || 0) * 5;

    return score;
}

function rankMemories(
    memories,
    message,
    detectedIntent
) {

    return memories
        .map(memory => ({
            ...memory,
            score: calculateScore(
                memory,
                message,
                detectedIntent
            )
        }))
        .sort((a, b) => b.score - a.score);

}

module.exports = {
    rankMemories
};