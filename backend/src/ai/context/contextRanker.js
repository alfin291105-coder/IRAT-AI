// =========================================
// Context Ranker
// IRAT AI v0.5.0
// =========================================

function calculateMemoryScore(memory) {
    let score = 0;

    // Importance utama
    score += (memory.importance || 0) * 10;

    // Identity dan preference lebih diprioritaskan
    if (
        memory.category === "identity" ||
        memory.category === "preference"
    ) {
        score += 50;
    }

    return score;
}

function rankMemories(memories = []) {
    return memories
        .map(memory => ({
            ...memory,
            contextScore: calculateMemoryScore(memory)
        }))
        .sort(
            (a, b) =>
                b.contextScore - a.contextScore
        );
}

module.exports = {
    rankMemories,
    calculateMemoryScore
};